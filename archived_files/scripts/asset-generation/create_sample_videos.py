#!/usr/bin/env python3
"""
Orson Vision Website - Sample Video Generator
Creates sample video files for testing and development
"""

import os
import subprocess
import json
import csv
from pathlib import Path
import time
from datetime import datetime

class SampleVideoGenerator:
    def __init__(self):
        self.base_dir = Path(".")
        self.downloaded_assets = []
        self.start_time = None

    def create_sample_video(self, output_path: Path, duration: int = 10) -> bool:
        """Create a sample video using FFmpeg"""
        try:
            # Create directory if it doesn't exist
            output_path.parent.mkdir(parents=True, exist_ok=True)

            # FFmpeg command to create a simple test video
            cmd = [
                'ffmpeg',
                '-f', 'lavfi',
                '-i', f'color=c=blue:s=1280x720:d={duration}',
                '-f', 'lavfi',
                '-i', f'sine=f=440:d={duration}',
                '-c:v', 'libx264',
                '-c:a', 'aac',
                '-shortest',
                '-y',  # Overwrite output file
                str(output_path)
            ]

            # Run FFmpeg command
            result = subprocess.run(cmd, capture_output=True, text=True)

            if result.returncode == 0:
                print(f"    ✅ Created: {output_path.name}")
                return True
            else:
                print(f"    ❌ Error creating video: {result.stderr}")
                return False

        except FileNotFoundError:
            print("    ❌ FFmpeg not found. Please install FFmpeg to create sample videos.")
            return False
        except Exception as e:
            print(f"    ❌ Error: {e}")
            return False

    def create_placeholder_video(self, output_path: Path) -> bool:
        """Create a placeholder video file (empty MP4)"""
        try:
            # Create directory if it doesn't exist
            output_path.parent.mkdir(parents=True, exist_ok=True)

            # Create a minimal MP4 file (just the header)
            minimal_mp4 = b'\x00\x00\x00\x18ftypmp42\x00\x00\x00\x00mp42isom\x00\x00\x00\x08free\x00\x00\x00\x00'

            with open(output_path, 'wb') as f:
                f.write(minimal_mp4)

            print(f"    ✅ Created placeholder: {output_path.name}")
            return True

        except Exception as e:
            print(f"    ❌ Error creating placeholder: {e}")
            return False

    def generate_video_filename(self, page: str, section: str, keyword: str, index: int) -> str:
        """Generate standardized video filename"""
        return f"{page}_{section}_{keyword}_{index:02d}.mp4"

    def create_video_metadata(self, asset_dir: Path, videos: list, page: str, section: str):
        """Create metadata CSV for videos"""
        metadata_file = asset_dir / "metadata.csv"

        with open(metadata_file, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['filename', 'title', 'description', 'keywords', 'source_url', 'license', 'file_size', 'duration']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()

            for i, video in enumerate(videos, 1):
                writer.writerow({
                    'filename': video,
                    'title': f"{page.replace('_', ' ').title()} {section.replace('_', ' ').title()} Video {i}",
                    'description': f"Sample video for {section.replace('_', ' ')} section in {page.replace('_', ' ')} page",
                    'keywords': f"{page},{section},video,sample,placeholder",
                    'source_url': "Generated sample video",
                    'license': "Free to use",
                    'file_size': "1-5MB",
                    'duration': "10-30 seconds"
                })

    def process_video_section(self, page: str, section: str, keyword: str, count: int = 3):
        """Process video creation for a specific section"""
        print(f"\n🔄 Processing: {page}/{section}/videos")

        # Create directory structure
        video_dir = self.base_dir / page / section / "videos"
        video_dir.mkdir(parents=True, exist_ok=True)

        downloaded_count = 0

        for i in range(count):
            filename = self.generate_video_filename(page, section, keyword, i + 1)
            filepath = video_dir / filename

            # Skip if file already exists
            if filepath.exists():
                print(f"    ⏭️  Skipped (already exists): {filename}")
                continue

            # Try to create sample video with FFmpeg first
            if self.create_sample_video(filepath, duration=10):
                downloaded_count += 1
                self.downloaded_assets.append(str(filepath))
            else:
                # Fallback to placeholder video
                if self.create_placeholder_video(filepath):
                    downloaded_count += 1
                    self.downloaded_assets.append(str(filepath))

        if downloaded_count > 0:
            print(f"  ✅ Created {downloaded_count} new videos for {section}")
            # Create metadata
            video_files = [f.name for f in video_dir.glob("*.mp4")]
            self.create_video_metadata(video_dir, video_files, page, section)
        else:
            print(f"  ⚠️  No new videos created for {section}")

    def run_video_generation(self):
        """Run the video generation process"""
        print("=" * 60)
        print("🎬 Orson Vision - Sample Video Generator")
        print("=" * 60)

        self.start_time = datetime.now()

        # Define all video sections that need videos
        video_sections = [
            # Homepage sections
            ("homepage", "hero_section", "cinematic_office"),
            ("homepage", "solutions_matrix/digital_innovation", "digital_innovation"),
            ("homepage", "solutions_matrix/creative_design", "creative_design"),
            ("homepage", "solutions_matrix/content_creation", "content_creation"),
            ("homepage", "solutions_matrix/technology_solutions", "technology_solutions"),
            ("homepage", "solutions_matrix/strategic_consulting", "strategic_consulting"),
            ("homepage", "client_journey", "client_journey"),
            ("homepage", "success_stories", "success_stories"),
            ("homepage", "contact_section", "contact_section"),

            # About page sections
            ("about", "hero", "cinematic_office"),
            ("about", "mission", "cinematic_office"),
            ("about", "values", "cinematic_office"),
            ("about", "story", "cinematic_office"),
            ("about", "cinematic_humanism", "cinematic_office"),
            ("about", "team", "cinematic_office"),
            ("about", "cta", "cinematic_office"),

            # Contact page sections
            ("contact", "hero", "cinematic_office"),
            ("contact", "contact_info", "cinematic_office"),
            ("contact", "contact_form", "cinematic_office"),

            # Services page sections
            ("services", "digital_innovation", "digital_innovation"),
            ("services", "creative_design", "creative_design"),
            ("services", "content_creation", "content_creation"),
            ("services", "technology_solutions", "technology_solutions"),
            ("services", "strategic_consulting", "strategic_consulting"),

            # Blog page sections
            ("blog", "featured", "cinematic_office"),
            ("blog", "articles", "cinematic_office"),

            # Careers page sections
            ("careers", "hero", "cinematic_office"),
            ("careers", "culture", "cinematic_office"),
            ("careers", "opportunities", "cinematic_office"),

            # Legal page sections
            ("legal", "privacy", "cinematic_office"),
            ("legal", "terms", "cinematic_office"),
        ]

        total_sections = len(video_sections)

        for i, (page, section, keyword) in enumerate(video_sections, 1):
            self.process_video_section(page, section, keyword)

            # Progress update
            elapsed = datetime.now() - self.start_time
            remaining_sections = total_sections - i
            if i > 0:
                avg_time = elapsed / i
                estimated_remaining = avg_time * remaining_sections
                print(f"\n📊 Progress: {i}/{total_sections} ({i/total_sections*100:.1f}%)")
                print(f"⏱️  Elapsed: {elapsed}")
                print(f"⏳ Estimated remaining: {estimated_remaining}")

        # Final summary
        elapsed = datetime.now() - self.start_time
        print(f"\n🎉 Video generation completed!")
        print(f"📁 Total videos created: {len(self.downloaded_assets)}")
        print(f"⏱️  Total time: {elapsed}")
        print(f"📊 Success rate: {len(self.downloaded_assets)}/{total_sections * 3} videos")

if __name__ == "__main__":
    generator = SampleVideoGenerator()
    generator.run_video_generation()

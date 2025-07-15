#!/usr/bin/env python3
"""
Orson Vision Website - Real Video Generator
Creates actual video content using Python libraries
"""

import os
import subprocess
import json
import csv
from pathlib import Path
import time
from datetime import datetime
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import cv2

class RealVideoGenerator:
    def __init__(self):
        self.base_dir = Path(".")
        self.downloaded_assets = []
        self.start_time = None

        # Video themes for each section
        self.video_themes = {
            "homepage_hero": "cinematic_office",
            "homepage_solutions_digital_innovation": "technology",
            "homepage_solutions_creative_design": "creative",
            "homepage_solutions_content_creation": "content",
            "homepage_solutions_technology_solutions": "tech",
            "homepage_solutions_strategic_consulting": "business",
            "homepage_client_journey": "journey",
            "homepage_success_stories": "success",
            "homepage_contact_section": "contact",
            "about_hero": "cinematic_office",
            "about_mission": "mission",
            "about_values": "values",
            "about_story": "story",
            "about_cinematic_humanism": "cinematic",
            "about_team": "team",
            "about_cta": "cta",
            "contact_hero": "cinematic_office",
            "contact_contact_info": "info",
            "contact_contact_form": "form",
            "services_digital_innovation": "digital_innovation",
            "services_creative_design": "creative_design",
            "services_content_creation": "content_creation",
            "services_technology_solutions": "technology_solutions",
            "services_strategic_consulting": "strategic_consulting",
            "blog_featured": "blog",
            "blog_articles": "articles",
            "careers_hero": "careers",
            "careers_culture": "culture",
            "careers_opportunities": "opportunities",
            "legal_privacy": "privacy",
            "legal_terms": "terms"
        }

    def create_text_video(self, output_path: Path, text: str, theme: str, duration: int = 10) -> bool:
        """Create a video with animated text and background"""
        try:
            # Create directory if it doesn't exist
            output_path.parent.mkdir(parents=True, exist_ok=True)

            # Video parameters
            width, height = 1280, 720
            fps = 30
            total_frames = duration * fps

            # Create video writer
            fourcc = cv2.VideoWriter_fourcc(*'mp4v')
            out = cv2.VideoWriter(str(output_path), fourcc, fps, (width, height))

            # Background colors based on theme
            bg_colors = {
                "cinematic_office": [(30, 58, 138), (59, 130, 246)],  # Blue gradient
                "technology": [(17, 24, 39), (31, 41, 55)],  # Dark tech
                "creative": [(147, 51, 234), (168, 85, 247)],  # Purple
                "content": [(220, 38, 127), (236, 72, 153)],  # Pink
                "tech": [(6, 78, 59), (5, 150, 105)],  # Green
                "business": [(120, 53, 15), (146, 64, 14)],  # Orange
                "journey": [(30, 58, 138), (59, 130, 246)],  # Blue
                "success": [(5, 150, 105), (34, 197, 94)],  # Green
                "contact": [(30, 58, 138), (59, 130, 246)],  # Blue
                "mission": [(30, 58, 138), (59, 130, 246)],  # Blue
                "values": [(147, 51, 234), (168, 85, 247)],  # Purple
                "story": [(30, 58, 138), (59, 130, 246)],  # Blue
                "cinematic": [(30, 58, 138), (59, 130, 246)],  # Blue
                "team": [(147, 51, 234), (168, 85, 247)],  # Purple
                "cta": [(30, 58, 138), (59, 130, 246)],  # Blue
                "info": [(30, 58, 138), (59, 130, 246)],  # Blue
                "form": [(30, 58, 138), (59, 130, 246)],  # Blue
                "digital_innovation": [(17, 24, 39), (31, 41, 55)],  # Dark tech
                "creative_design": [(147, 51, 234), (168, 85, 247)],  # Purple
                "content_creation": [(220, 38, 127), (236, 72, 153)],  # Pink
                "technology_solutions": [(6, 78, 59), (5, 150, 105)],  # Green
                "strategic_consulting": [(120, 53, 15), (146, 64, 14)],  # Orange
                "blog": [(30, 58, 138), (59, 130, 246)],  # Blue
                "articles": [(30, 58, 138), (59, 130, 246)],  # Blue
                "careers": [(30, 58, 138), (59, 130, 246)],  # Blue
                "culture": [(147, 51, 234), (168, 85, 247)],  # Purple
                "opportunities": [(30, 58, 138), (59, 130, 246)],  # Blue
                "privacy": [(30, 58, 138), (59, 130, 246)],  # Blue
                "terms": [(30, 58, 138), (59, 130, 246)]  # Blue
            }

            bg_color1, bg_color2 = bg_colors.get(theme, [(30, 58, 138), (59, 130, 246)])

            for frame_num in range(total_frames):
                # Create frame
                frame = np.zeros((height, width, 3), dtype=np.uint8)

                # Animated gradient background
                progress = frame_num / total_frames
                r = int(bg_color1[0] * (1 - progress) + bg_color2[0] * progress)
                g = int(bg_color1[1] * (1 - progress) + bg_color2[1] * progress)
                b = int(bg_color1[2] * (1 - progress) + bg_color2[2] * progress)

                frame[:] = [b, g, r]  # OpenCV uses BGR

                # Add animated text
                font_scale = 2.0 + 0.5 * np.sin(frame_num * 0.1)  # Animated font size
                font_thickness = 3

                # Split text into lines
                words = text.split()
                lines = []
                current_line = ""
                for word in words:
                    if len(current_line + " " + word) <= 20:
                        current_line += " " + word if current_line else word
                    else:
                        lines.append(current_line)
                        current_line = word
                if current_line:
                    lines.append(current_line)

                # Draw text lines
                for i, line in enumerate(lines):
                    text_size = cv2.getTextSize(line, cv2.FONT_HERSHEY_SIMPLEX, font_scale, font_thickness)[0]
                    text_x = (width - text_size[0]) // 2
                    text_y = height // 2 + (i - len(lines) // 2) * 80

                    # Add shadow
                    cv2.putText(frame, line, (text_x + 2, text_y + 2),
                              cv2.FONT_HERSHEY_SIMPLEX, font_scale, (0, 0, 0), font_thickness)

                    # Add main text
                    cv2.putText(frame, line, (text_x, text_y),
                              cv2.FONT_HERSHEY_SIMPLEX, font_scale, (255, 255, 255), font_thickness)

                # Add subtle animation effects
                if frame_num % 30 == 0:  # Every second
                    # Add a subtle pulse effect
                    cv2.circle(frame, (width // 2, height // 2),
                              int(50 + 20 * np.sin(frame_num * 0.2)), (255, 255, 255), 2)

                out.write(frame)

            out.release()
            print(f"    ✅ Created: {output_path.name}")
            return True

        except Exception as e:
            print(f"    ❌ Error creating video: {e}")
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
                    'description': f"Short cinematic video for {section.replace('_', ' ')} section in {page.replace('_', ' ')} page",
                    'keywords': f"{page},{section},video,cinematic,short,professional",
                    'source_url': "Generated video content",
                    'license': "Free to use",
                    'file_size': "1-5MB",
                    'duration': "10-15 seconds"
                })

    def process_video_section(self, page: str, section: str, keyword: str, count: int = 3):
        """Process video creation for a specific section"""
        print(f"\n🔄 Processing: {page}/{section}/videos")

        # Create directory structure
        video_dir = self.base_dir / page / section / "videos"
        video_dir.mkdir(parents=True, exist_ok=True)

        downloaded_count = 0

        # Get theme for this section
        section_key = f"{page}_{section.replace('/', '_')}"
        theme = self.video_themes.get(section_key, "cinematic_office")

        # Video text based on section
        video_texts = {
            "cinematic_office": "Cinematic Humanism",
            "technology": "Digital Innovation",
            "creative": "Creative Design",
            "content": "Content Creation",
            "tech": "Technology Solutions",
            "business": "Strategic Consulting",
            "journey": "Client Journey",
            "success": "Success Stories",
            "contact": "Contact Us",
            "mission": "Our Mission",
            "values": "Our Values",
            "story": "Our Story",
            "cinematic": "Cinematic Humanism",
            "team": "Our Team",
            "cta": "Get Started",
            "info": "Contact Info",
            "form": "Contact Form",
            "digital_innovation": "Digital Innovation",
            "creative_design": "Creative Design",
            "content_creation": "Content Creation",
            "technology_solutions": "Technology Solutions",
            "strategic_consulting": "Strategic Consulting",
            "blog": "Featured Content",
            "articles": "Latest Articles",
            "careers": "Join Our Team",
            "culture": "Our Culture",
            "opportunities": "Career Opportunities",
            "privacy": "Privacy Policy",
            "terms": "Terms of Service"
        }

        text = video_texts.get(theme, "Orson Vision")

        for i in range(count):
            filename = self.generate_video_filename(page, section, keyword, i + 1)
            filepath = video_dir / filename

            # Skip if file already exists and has content
            if filepath.exists() and filepath.stat().st_size > 1000:  # More than 1KB
                print(f"    ⏭️  Skipped (already exists): {filename}")
                continue

            # Create video with different variations
            variations = [
                f"{text}",
                f"{text} - {i+1}",
                f"{text} Experience"
            ]

            video_text = variations[i % len(variations)]

            if self.create_text_video(filepath, video_text, theme, duration=12):
                downloaded_count += 1
                self.downloaded_assets.append(str(filepath))

        if downloaded_count > 0:
            print(f"  ✅ Created {downloaded_count} new videos for {section}")
            # Create metadata
            video_files = [f.name for f in video_dir.glob("*.mp4") if f.stat().st_size > 1000]
            if video_files:
                self.create_video_metadata(video_dir, video_files, page, section)
        else:
            print(f"  ⚠️  No new videos created for {section}")

    def run_video_generation(self):
        """Run the video generation process"""
        print("=" * 60)
        print("🎬 Orson Vision - Real Video Generator")
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
    generator = RealVideoGenerator()
    generator.run_video_generation()

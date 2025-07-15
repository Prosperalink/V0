#!/usr/bin/env python3
"""
Robust Download of Missing Assets for Orson Vision
Handles Pexels API issues and provides fallback methods
"""

import os
import requests
import time
import random
from pathlib import Path
from urllib.parse import quote

# Pexels API Key
PEXELS_API_KEY = "iJOcZebzVaISr7kLFc6VwLinxpIC7Lsk8v6dZ4okdIetld1mT3Tm83Ea"

# Missing assets based on 404 errors from the logs
MISSING_ASSETS = {
    # Portfolio images
    "assets/portfolio/cinematic-web-design.jpg": "cinematic web design",
    "assets/portfolio/digital-marketing.jpg": "digital marketing",
    "assets/portfolio/mobile-app.jpg": "mobile app development",

    # About section images
    "assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_01.jpg": "cinematic office",
    "assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_02.jpg": "cinematic office",
    "assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_03.jpg": "cinematic office",
    "assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_04.jpg": "cinematic office",
    "assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_05.jpg": "cinematic office",

    "assets/about/mission/images/about_mission_cinematic_office_01.jpg": "mission office",
    "assets/about/mission/images/about_mission_cinematic_office_02.jpg": "mission office",
    "assets/about/mission/images/about_mission_cinematic_office_03.jpg": "mission office",
    "assets/about/mission/images/about_mission_cinematic_office_04.jpg": "mission office",
    "assets/about/mission/images/about_mission_cinematic_office_05.jpg": "mission office",

    "assets/about/team/images/about_team_cinematic_office_01.jpg": "team office",
    "assets/about/team/images/about_team_cinematic_office_02.jpg": "team office",
    "assets/about/team/images/about_team_cinematic_office_03.jpg": "team office",
    "assets/about/team/images/about_team_cinematic_office_04.jpg": "team office",
    "assets/about/team/images/about_team_cinematic_office_05.jpg": "team office",

    # Testimonial images
    "assets/testimonials/sarah-johnson.jpg": "professional woman portrait",
    "assets/testimonials/michael-chen.jpg": "professional man portrait",
    "assets/testimonials/emily-rodriguez.jpg": "professional woman portrait",

    # Logo images
    "assets/logos/techflow-logo.png": "tech company logo",
    "assets/logos/innovatecorp-logo.png": "innovation company logo",
    "assets/logos/startuphub-logo.png": "startup company logo",

    # Blog images
    "assets/blog/cinematic-web-design.jpg": "cinematic web design",
    "assets/blog/storytelling-marketing.jpg": "storytelling marketing",
    "assets/blog/performance-optimization.jpg": "performance optimization",
    "assets/blog/brand-identity.jpg": "brand identity",
    "assets/blog/color-psychology.jpg": "color psychology",
    "assets/blog/ecommerce-design.jpg": "ecommerce design",

    # Videos
    "assets/videos/cinematic-web-design.mp4": "cinematic web design",
    "assets/videos/digital-marketing.mp4": "digital marketing",
    "assets/videos/mobile-app.mp4": "mobile app development",
    "assets/videos/testimonial-sarah.mp4": "testimonial interview",
    "assets/videos/testimonial-michael.mp4": "testimonial interview",
    "assets/videos/testimonial-emily.mp4": "testimonial interview",
}

def get_pexels_image_url(search_term, retries=3):
    """Get image URL from Pexels API with retries"""
    for attempt in range(retries):
        try:
            search_url = f"https://api.pexels.com/photos/search?query={quote(search_term)}&per_page=1"
            headers = {"Authorization": PEXELS_API_KEY}
            response = requests.get(search_url, headers=headers, timeout=30)

            if response.status_code == 200:
                data = response.json()
                if data.get('photos') and len(data['photos']) > 0:
                    photo = data['photos'][0]
                    return photo['src']['large']
            elif response.status_code == 522:
                print(f"  ⚠️  Server error (522) for '{search_term}', attempt {attempt + 1}/{retries}")
                if attempt < retries - 1:
                    time.sleep(random.uniform(2, 5))
                    continue
            else:
                print(f"  ❌ API Error {response.status_code} for '{search_term}': {response.text}")

        except Exception as e:
            print(f"  ❌ Network Error for '{search_term}': {e}")
            if attempt < retries - 1:
                time.sleep(random.uniform(1, 3))
                continue

    return None

def get_pexels_video_url(search_term, retries=3):
    """Get video URL from Pexels API with retries"""
    for attempt in range(retries):
        try:
            search_url = f"https://api.pexels.com/videos/search?query={quote(search_term)}&per_page=1"
            headers = {"Authorization": PEXELS_API_KEY}
            response = requests.get(search_url, headers=headers, timeout=30)

            if response.status_code == 200:
                data = response.json()
                if data.get('videos') and len(data['videos']) > 0:
                    video = data['videos'][0]
                    video_files = video.get('video_files', [])
                    hd_video = None
                    for file in video_files:
                        if file.get('width', 0) >= 1280:  # HD or better
                            hd_video = file
                            break
                    if not hd_video and video_files:
                        hd_video = video_files[0]  # Use first available
                    if hd_video:
                        return hd_video['link']
            elif response.status_code == 522:
                print(f"  ⚠️  Server error (522) for '{search_term}', attempt {attempt + 1}/{retries}")
                if attempt < retries - 1:
                    time.sleep(random.uniform(2, 5))
                    continue
            else:
                print(f"  ❌ API Error {response.status_code} for '{search_term}': {response.text}")

        except Exception as e:
            print(f"  ❌ Network Error for '{search_term}': {e}")
            if attempt < retries - 1:
                time.sleep(random.uniform(1, 3))
                continue

    return None

def create_placeholder_image(dest_path, search_term):
    """Create a simple placeholder image using a solid color"""
    try:
        from PIL import Image, ImageDraw, ImageFont

        # Create a simple placeholder image
        width, height = 800, 600
        color = (45, 45, 65)  # Dark blue-gray
        img = Image.new('RGB', (width, height), color)
        draw = ImageDraw.Draw(img)

        # Add text
        try:
            font = ImageFont.truetype("arial.ttf", 24)
        except:
            font = ImageFont.load_default()

        text = f"Placeholder: {search_term}"
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]

        x = (width - text_width) // 2
        y = (height - text_height) // 2

        draw.text((x, y), text, fill=(212, 175, 55), font=font)  # Golden color

        img.save(dest_path, 'JPEG', quality=90)
        print(f"  ✅ Created placeholder: {dest_path}")
        return True

    except ImportError:
        print(f"  ❌ PIL not available, cannot create placeholder")
        return False
    except Exception as e:
        print(f"  ❌ Failed to create placeholder: {e}")
        return False

def download_file(url, dest, retries=3):
    """Download file using requests with retries"""
    for attempt in range(retries):
        try:
            if dest.exists():
                print(f"  ⏭️  Skipping (already exists): {dest}")
                return True

            print(f"  📥 Downloading: {url}")
            print(f"    → {dest}")

            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }

            with requests.get(url, headers=headers, stream=True, timeout=60) as r:
                r.raise_for_status()
                with open(dest, 'wb') as f:
                    for chunk in r.iter_content(chunk_size=8192):
                        if chunk:
                            f.write(chunk)

            print(f"  ✅ Downloaded: {dest} ({dest.stat().st_size // 1024} KB)")
            return True

        except Exception as e:
            print(f"  ❌ Download failed (attempt {attempt + 1}/{retries}): {e}")
            if attempt < retries - 1:
                time.sleep(random.uniform(1, 3))
                continue

    return False

def main():
    print("="*80)
    print("🖼️  Robust Download of Missing Assets from Pexels API")
    print("="*80)

    success_count = 0
    placeholder_count = 0
    total_count = len(MISSING_ASSETS)

    for asset_path, search_term in MISSING_ASSETS.items():
        print(f"\n📁 Asset: {asset_path}")
        print(f"🔍 Searching for: {search_term}")

        # Create directory
        dest_path = Path(asset_path)
        dest_path.parent.mkdir(parents=True, exist_ok=True)

        # Determine if it's a video or image
        is_video = asset_path.endswith('.mp4')

        if is_video:
            url = get_pexels_video_url(search_term)
        else:
            url = get_pexels_image_url(search_term)

        if url:
            if download_file(url, dest_path):
                success_count += 1
        else:
            print(f"  ❌ No asset found for: {search_term}")
            print(f"  🎨 Creating placeholder...")
            if create_placeholder_image(dest_path, search_term):
                placeholder_count += 1

        # Rate limiting - be respectful to the API
        time.sleep(random.uniform(1, 2))

    print(f"\n🎉 Download Summary:")
    print(f"✅ Successful downloads: {success_count}/{total_count}")
    print(f"🎨 Placeholders created: {placeholder_count}/{total_count}")
    print(f"❌ Failed: {total_count - success_count - placeholder_count}/{total_count}")

    if success_count > 0 or placeholder_count > 0:
        print(f"\n📁 Assets downloaded to: {Path.cwd()}")
        print("🔄 You may need to restart your Next.js dev server to see the new assets")

if __name__ == "__main__":
    main()

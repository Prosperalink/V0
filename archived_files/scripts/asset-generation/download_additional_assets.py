#!/usr/bin/env python3
"""
Download Additional Assets from Pexels API for Orson Vision
Downloads additional images and videos for blog and other sections
"""

import os
import requests
from pathlib import Path
import time

# Pexels API Key
PEXELS_API_KEY = "iJOcZebzVaISr7kLFc6VwLinxpIC7Lsk8v6dZ4okdIetld1mT3Tm83Ea"

# Additional assets needed for various sections
ADDITIONAL_ASSETS = {
    # Blog section images (from the blog page)
    "assets/blog/cinematic-web-design.jpg": "cinematic web design",
    "assets/blog/storytelling-marketing.jpg": "storytelling marketing",
    "assets/blog/performance-optimization.jpg": "performance optimization",
    "assets/blog/brand-identity.jpg": "brand identity",
    "assets/blog/color-psychology.jpg": "color psychology",
    "assets/blog/ecommerce-design.jpg": "ecommerce design",

    # Homepage section images
    "assets/homepage/hero_section/images/hero_01.jpg": "cinematic office",
    "assets/homepage/hero_section/images/hero_02.jpg": "modern workspace",
    "assets/homepage/hero_section/images/hero_03.jpg": "creative studio",

    # Services section images
    "assets/services/content_creation/images/content_01.jpg": "content creation",
    "assets/services/content_creation/images/content_02.jpg": "writing desk",
    "assets/services/creative_design/images/design_01.jpg": "creative design",
    "assets/services/creative_design/images/design_02.jpg": "design studio",
    "assets/services/digital_innovation/images/innovation_01.jpg": "digital innovation",
    "assets/services/digital_innovation/images/innovation_02.jpg": "technology",
    "assets/services/strategic_consulting/images/consulting_01.jpg": "business consulting",
    "assets/services/strategic_consulting/images/consulting_02.jpg": "strategy meeting",
    "assets/services/technology_solutions/images/tech_01.jpg": "technology solutions",
    "assets/services/technology_solutions/images/tech_02.jpg": "software development",

    # About section additional images
    "assets/about/hero/images/about_hero_01.jpg": "cinematic office",
    "assets/about/hero/images/about_hero_02.jpg": "modern workspace",
    "assets/about/values/images/values_01.jpg": "company values",
    "assets/about/values/images/values_02.jpg": "team collaboration",
    "assets/about/story/images/story_01.jpg": "company story",
    "assets/about/story/images/story_02.jpg": "business history",
    "assets/about/cta/images/cta_01.jpg": "call to action",
    "assets/about/cta/images/cta_02.jpg": "business growth",

    # Contact section images
    "assets/contact/hero/images/contact_hero_01.jpg": "contact office",
    "assets/contact/hero/images/contact_hero_02.jpg": "customer service",
    "assets/contact/contact_info/images/contact_info_01.jpg": "contact information",
    "assets/contact/contact_info/images/contact_info_02.jpg": "communication",
    "assets/contact/contact_form/images/contact_form_01.jpg": "contact form",
    "assets/contact/contact_form/images/contact_form_02.jpg": "online form",

    # Careers section images
    "assets/careers/hero/images/careers_hero_01.jpg": "careers",
    "assets/careers/hero/images/careers_hero_02.jpg": "job opportunities",
    "assets/careers/culture/images/culture_01.jpg": "company culture",
    "assets/careers/culture/images/culture_02.jpg": "workplace culture",
    "assets/careers/opportunities/images/opportunities_01.jpg": "career opportunities",
    "assets/careers/opportunities/images/opportunities_02.jpg": "job growth",

    # Legal section images
    "assets/legal/privacy/images/privacy_01.jpg": "privacy policy",
    "assets/legal/privacy/images/privacy_02.jpg": "data protection",
    "assets/legal/terms/images/terms_01.jpg": "terms and conditions",
    "assets/legal/terms/images/terms_02.jpg": "legal documents",

    # Videos for various sections
    "assets/videos/hero-background.mp4": "cinematic office background",
    "assets/videos/about-story.mp4": "company story video",
    "assets/videos/services-overview.mp4": "services overview",
    "assets/videos/contact-intro.mp4": "contact introduction",
    "assets/videos/careers-culture.mp4": "company culture video",
}

def get_pexels_image_url(search_term):
    """Get image URL from Pexels API"""
    try:
        search_url = f"https://api.pexels.com/photos/search?query={search_term}&per_page=1"
        headers = {"Authorization": PEXELS_API_KEY}
        response = requests.get(search_url, headers=headers, timeout=20)
        response.raise_for_status()
        data = response.json()
        if data.get('photos') and len(data['photos']) > 0:
            photo = data['photos'][0]
            # Get the large version
            return photo['src']['large']
        return None
    except Exception as e:
        print(f"  ❌ API Error for '{search_term}': {e}")
        return None

def get_pexels_video_url(search_term):
    """Get video URL from Pexels API"""
    try:
        search_url = f"https://api.pexels.com/videos/search?query={search_term}&per_page=1"
        headers = {"Authorization": PEXELS_API_KEY}
        response = requests.get(search_url, headers=headers, timeout=20)
        response.raise_for_status()
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
        return None
    except Exception as e:
        print(f"  ❌ API Error for '{search_term}': {e}")
        return None

def download_file(url, dest):
    """Download file using requests with browser user-agent"""
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
        print(f"  ❌ Failed: {e}")
        return False

def main():
    print("="*80)
    print("🖼️  Downloading Additional Assets from Pexels API")
    print("="*80)

    success_count = 0
    total_count = len(ADDITIONAL_ASSETS)

    for asset_path, search_term in ADDITIONAL_ASSETS.items():
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

        # Rate limiting - be respectful to the API
        time.sleep(1)

    print(f"\n🎉 Download Summary:")
    print(f"✅ Successful: {success_count}/{total_count}")
    print(f"❌ Failed: {total_count - success_count}/{total_count}")

    if success_count > 0:
        print(f"\n📁 Assets downloaded to: {Path.cwd()}")
        print("🔄 You may need to restart your Next.js dev server to see the new assets")

if __name__ == "__main__":
    main()

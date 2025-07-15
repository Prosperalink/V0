#!/usr/bin/env python3
"""
Download Videos from Pexels API for Orson Vision
Downloads 1 video per section using the Pexels API (using requests library)
"""

import os
import requests
from pathlib import Path

# Pexels API Key
PEXELS_API_KEY = "iJOcZebzVaISr7kLFc6VwLinxpIC7Lsk8v6dZ4okdIetld1mT3Tm83Ea"

# Map sections to search terms (expanded)
SECTION_VIDEOS = {
    # Homepage
    "assets/homepage/hero_section/videos": "cinematic office",
    "assets/homepage/client_journey/videos": "client journey",
    "assets/homepage/solutions_matrix/digital_innovation/videos": "digital innovation",
    "assets/homepage/solutions_matrix/creative_design/videos": "creative design",
    "assets/homepage/solutions_matrix/content_creation/videos": "content creation",
    "assets/homepage/solutions_matrix/technology_solutions/videos": "technology",
    "assets/homepage/solutions_matrix/strategic_consulting/videos": "consulting",
    "assets/homepage/success_stories/videos": "success story",
    "assets/homepage/contact_section/videos": "contact",
    # About
    "assets/about/hero/videos": "cinematic office",
    "assets/about/mission/videos": "mission",
    "assets/about/values/videos": "values",
    "assets/about/story/videos": "story",
    "assets/about/cinematic_humanism/videos": "cinematic",
    "assets/about/team/videos": "teamwork",
    "assets/about/cta/videos": "call to action",
    # Contact
    "assets/contact/hero/videos": "contact",
    "assets/contact/contact_info/videos": "contact info",
    "assets/contact/contact_form/videos": "contact form",
    # Services
    "assets/services/digital_innovation/videos": "digital innovation",
    "assets/services/creative_design/videos": "creative design",
    "assets/services/content_creation/videos": "content creation",
    "assets/services/technology_solutions/videos": "technology",
    "assets/services/strategic_consulting/videos": "consulting",
    # Blog
    "assets/blog/featured/videos": "blog",
    "assets/blog/articles/videos": "article",
    # Careers
    "assets/careers/hero/videos": "careers",
    "assets/careers/culture/videos": "company culture",
    "assets/careers/opportunities/videos": "job opportunity",
    # Legal
    "assets/legal/privacy/videos": "privacy",
    "assets/legal/terms/videos": "terms and conditions"
}

def get_pexels_video_url(search_term):
    """Get video URL from Pexels API using requests"""
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

def download_video(url, dest):
    """Download video using requests with browser user-agent"""
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
    print("="*60)
    print("🎬 Downloading Videos from Pexels API (requests)")
    print("="*60)
    success_count = 0
    total_count = len(SECTION_VIDEOS)
    for folder, search_term in SECTION_VIDEOS.items():
        print(f"\n📁 Section: {folder}")
        print(f"🔍 Searching for: {search_term}")
        Path(folder).mkdir(parents=True, exist_ok=True)
        video_url = get_pexels_video_url(search_term)
        if video_url:
            filename = f"pexels_{search_term.replace(' ', '_')}.mp4"
            dest = Path(folder) / filename
            if download_video(video_url, dest):
                success_count += 1
        else:
            print(f"  ❌ No video found for: {search_term}")
    print(f"\n🎉 Download Summary:")
    print(f"✅ Successful: {success_count}/{total_count}")
    print(f"❌ Failed: {total_count - success_count}/{total_count}")

if __name__ == "__main__":
    main()

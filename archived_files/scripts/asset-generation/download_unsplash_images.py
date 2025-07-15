#!/usr/bin/env python3
"""
Download Images from Unsplash API for Orson Vision
Downloads 1 image per section using the Unsplash API (using requests library)
"""

import os
import requests
from pathlib import Path

# Unsplash API Key (using the same key for now)
UNSPLASH_API_KEY = "iJOcZebzVaISr7kLFc6VwLinxpIC7Lsk8v6dZ4okdIetld1mT3Tm83Ea"

# Map sections to search terms (simplified)
SECTION_IMAGES = {
    # Homepage
    "assets/homepage/hero_section/images": "office",
    "assets/homepage/client_journey/images": "business",
    "assets/homepage/solutions_matrix/digital_innovation/images": "technology",
    "assets/homepage/solutions_matrix/creative_design/images": "creative",
    "assets/homepage/solutions_matrix/content_creation/images": "content",
    "assets/homepage/solutions_matrix/technology_solutions/images": "technology",
    "assets/homepage/solutions_matrix/strategic_consulting/images": "consulting",
    "assets/homepage/success_stories/images": "success",
    "assets/homepage/contact_section/images": "contact",
    # About
    "assets/about/hero/images": "office",
    "assets/about/mission/images": "mission",
    "assets/about/values/images": "values",
    "assets/about/story/images": "story",
    "assets/about/cinematic_humanism/images": "cinematic",
    "assets/about/team/images": "teamwork",
    "assets/about/cta/images": "action",
    # Contact
    "assets/contact/hero/images": "contact",
    "assets/contact/contact_info/images": "contact",
    "assets/contact/contact_form/images": "form",
    # Services
    "assets/services/digital_innovation/images": "technology",
    "assets/services/creative_design/images": "creative",
    "assets/services/content_creation/images": "content",
    "assets/services/technology_solutions/images": "technology",
    "assets/services/strategic_consulting/images": "consulting",
    # Blog
    "assets/blog/featured/images": "blog",
    "assets/blog/articles/images": "article",
    # Careers
    "assets/careers/hero/images": "careers",
    "assets/careers/culture/images": "culture",
    "assets/careers/opportunities/images": "opportunity",
    # Legal
    "assets/legal/privacy/images": "privacy",
    "assets/legal/terms/images": "legal"
}

def get_unsplash_image_url(search_term):
    """Get image URL from Unsplash API using requests"""
    try:
        search_url = f"https://api.unsplash.com/search/photos?query={search_term}&per_page=1"
        headers = {"Authorization": f"Client-ID {UNSPLASH_API_KEY}"}
        response = requests.get(search_url, headers=headers, timeout=20)
        response.raise_for_status()
        data = response.json()
        if data.get('results') and len(data['results']) > 0:
            photo = data['results'][0]
            # Get the regular size URL
            return photo['urls']['regular']
        return None
    except Exception as e:
        print(f"  ❌ API Error for '{search_term}': {e}")
        return None

def download_image(url, dest):
    """Download image using requests with browser user-agent"""
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
    print("🖼️  Downloading Images from Unsplash API (requests)")
    print("="*60)
    success_count = 0
    total_count = len(SECTION_IMAGES)
    for folder, search_term in SECTION_IMAGES.items():
        print(f"\n📁 Section: {folder}")
        print(f"🔍 Searching for: {search_term}")
        Path(folder).mkdir(parents=True, exist_ok=True)
        image_url = get_unsplash_image_url(search_term)
        if image_url:
            filename = f"unsplash_{search_term.replace(' ', '_')}.jpg"
            dest = Path(folder) / filename
            if download_image(image_url, dest):
                success_count += 1
        else:
            print(f"  ❌ No image found for: {search_term}")
    print(f"\n🎉 Download Summary:")
    print(f"✅ Successful: {success_count}/{total_count}")
    print(f"❌ Failed: {total_count - success_count}/{total_count}")

if __name__ == "__main__":
    main()

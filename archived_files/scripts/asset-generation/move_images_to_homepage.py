#!/usr/bin/env python3
"""
Move available images to homepage sections to get 10 images per section
"""

import os
import shutil
from pathlib import Path

def move_images_to_homepage():
    """Move available images to homepage sections"""

    base_dir = Path(".")

    # Define homepage sections that need 10 images each
    homepage_sections = [
        "homepage/hero_section/images",
        "homepage/solutions_matrix/digital_innovation/images",
        "homepage/solutions_matrix/creative_design/images",
        "homepage/solutions_matrix/content_creation/images",
        "homepage/solutions_matrix/technology_solutions/images",
        "homepage/solutions_matrix/strategic_consulting/images",
        "homepage/client_journey/images",
        "homepage/success_stories/images",
        "homepage/contact_section/images"
    ]

    # Source directories with available images
    source_dirs = [
        "about/hero/images",
        "about/mission/images",
        "about/values/images",
        "about/story/images",
        "about/team/images",
        "about/cinematic_humanism/images",
        "about/cta/images",
        "services/digital_innovation/images",
        "services/creative_design/images",
        "services/content_creation/images",
        "services/technology_solutions/images",
        "services/strategic_consulting/images"
    ]

    print("🚀 Moving images to homepage sections...")

    for section in homepage_sections:
        section_path = base_dir / section
        section_path.mkdir(parents=True, exist_ok=True)

        print(f"\n📁 Processing: {section}")

        # Count existing images in this section
        existing_images = list(section_path.glob("*.jpg"))
        existing_count = len(existing_images)

        print(f"  📊 Existing images: {existing_count}")

        if existing_count >= 10:
            print(f"  ✅ Already has {existing_count} images, skipping...")
            continue

        needed = 10 - existing_count
        print(f"  ➕ Need {needed} more images")

        # Collect available images from source directories
        available_images = []
        for source_dir in source_dirs:
            source_path = base_dir / source_dir
            if source_path.exists():
                images = list(source_path.glob("*.jpg"))
                available_images.extend(images)

        # Take the first 'needed' images
        images_to_move = available_images[:needed]

        if len(images_to_move) < needed:
            print(f"  ⚠️  Warning: Only {len(images_to_move)} images available, need {needed}")

        # Move images and rename them
        for i, image_path in enumerate(images_to_move, start=existing_count + 1):
            # Generate new filename
            section_name = section.split('/')[-2]  # Get the section name
            new_filename = f"homepage_{section_name}_{section_name}_{i:02d}.jpg"
            new_path = section_path / new_filename

            try:
                shutil.copy2(image_path, new_path)
                print(f"    ✅ Moved: {image_path.name} → {new_filename}")
            except Exception as e:
                print(f"    ❌ Error moving {image_path.name}: {e}")

    print("\n🎉 Image movement completed!")

    # Final count
    total_images = 0
    for section in homepage_sections:
        section_path = base_dir / section
        if section_path.exists():
            count = len(list(section_path.glob("*.jpg")))
            total_images += count
            print(f"📁 {section}: {count} images")

    print(f"\n📊 Total homepage images: {total_images}")

if __name__ == "__main__":
    move_images_to_homepage()

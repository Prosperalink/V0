#!/usr/bin/env python3
"""
Create Placeholder Assets for Orson Vision
Generates placeholder images and videos for all missing assets
"""

import os
import time
from pathlib import Path

# Missing assets based on 404 errors from the logs
MISSING_ASSETS = {
    # Portfolio images
    "assets/portfolio/cinematic-web-design.jpg": "Cinematic Web Design",
    "assets/portfolio/digital-marketing.jpg": "Digital Marketing",
    "assets/portfolio/mobile-app.jpg": "Mobile App Development",

    # About section images
    "assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_01.jpg": "Cinematic Office 1",
    "assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_02.jpg": "Cinematic Office 2",
    "assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_03.jpg": "Cinematic Office 3",
    "assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_04.jpg": "Cinematic Office 4",
    "assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_05.jpg": "Cinematic Office 5",

    "assets/about/mission/images/about_mission_cinematic_office_01.jpg": "Mission Office 1",
    "assets/about/mission/images/about_mission_cinematic_office_02.jpg": "Mission Office 2",
    "assets/about/mission/images/about_mission_cinematic_office_03.jpg": "Mission Office 3",
    "assets/about/mission/images/about_mission_cinematic_office_04.jpg": "Mission Office 4",
    "assets/about/mission/images/about_mission_cinematic_office_05.jpg": "Mission Office 5",

    "assets/about/team/images/about_team_cinematic_office_01.jpg": "Team Office 1",
    "assets/about/team/images/about_team_cinematic_office_02.jpg": "Team Office 2",
    "assets/about/team/images/about_team_cinematic_office_03.jpg": "Team Office 3",
    "assets/about/team/images/about_team_cinematic_office_04.jpg": "Team Office 4",
    "assets/about/team/images/about_team_cinematic_office_05.jpg": "Team Office 5",

    # Testimonial images
    "assets/testimonials/sarah-johnson.jpg": "Sarah Johnson",
    "assets/testimonials/michael-chen.jpg": "Michael Chen",
    "assets/testimonials/emily-rodriguez.jpg": "Emily Rodriguez",

    # Logo images
    "assets/logos/techflow-logo.png": "TechFlow Logo",
    "assets/logos/innovatecorp-logo.png": "InnovateCorp Logo",
    "assets/logos/startuphub-logo.png": "StartupHub Logo",

    # Blog images
    "assets/blog/cinematic-web-design.jpg": "Cinematic Web Design",
    "assets/blog/storytelling-marketing.jpg": "Storytelling Marketing",
    "assets/blog/performance-optimization.jpg": "Performance Optimization",
    "assets/blog/brand-identity.jpg": "Brand Identity",
    "assets/blog/color-psychology.jpg": "Color Psychology",
    "assets/blog/ecommerce-design.jpg": "E-commerce Design",

    # Videos
    "assets/videos/cinematic-web-design.mp4": "Cinematic Web Design",
    "assets/videos/digital-marketing.mp4": "Digital Marketing",
    "assets/videos/mobile-app.mp4": "Mobile App Development",
    "assets/videos/testimonial-sarah.mp4": "Sarah Johnson Testimonial",
    "assets/videos/testimonial-michael.mp4": "Michael Chen Testimonial",
    "assets/videos/testimonial-emily.mp4": "Emily Rodriguez Testimonial",
}

def create_placeholder_image(dest_path, title):
    """Create a placeholder image with title"""
    try:
        from PIL import Image, ImageDraw, ImageFont

        # Create a cinematic-style placeholder image
        width, height = 800, 600
        bg_color = (45, 45, 65)  # Dark blue-gray
        accent_color = (212, 175, 55)  # Golden accent

        img = Image.new('RGB', (width, height), bg_color)
        draw = ImageDraw.Draw(img)

        # Add gradient overlay
        for y in range(height):
            alpha = int(255 * (1 - y / height) * 0.3)
            overlay_color = (accent_color[0], accent_color[1], accent_color[2], alpha)
            draw.line([(0, y), (width, y)], fill=overlay_color[:3])

        # Add title text
        try:
            font = ImageFont.truetype("arial.ttf", 28)
        except:
            font = ImageFont.load_default()

        # Split title into lines if too long
        words = title.split()
        lines = []
        current_line = ""
        for word in words:
            test_line = current_line + " " + word if current_line else word
            bbox = draw.textbbox((0, 0), test_line, font=font)
            if bbox[2] - bbox[0] > width - 100:
                if current_line:
                    lines.append(current_line)
                    current_line = word
                else:
                    lines.append(word)
            else:
                current_line = test_line
        if current_line:
            lines.append(current_line)

        # Draw text lines
        line_height = 35
        total_height = len(lines) * line_height
        start_y = (height - total_height) // 2

        for i, line in enumerate(lines):
            bbox = draw.textbbox((0, 0), line, font=font)
            text_width = bbox[2] - bbox[0]
            x = (width - text_width) // 2
            y = start_y + i * line_height
            draw.text((x, y), line, fill=accent_color, font=font)

        # Add subtitle
        subtitle = "Orson Vision"
        try:
            subtitle_font = ImageFont.truetype("arial.ttf", 16)
        except:
            subtitle_font = ImageFont.load_default()

        subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
        subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
        subtitle_x = (width - subtitle_width) // 2
        subtitle_y = start_y + len(lines) * line_height + 20
        draw.text((subtitle_x, subtitle_y), subtitle, fill=(150, 150, 150), font=subtitle_font)

        img.save(dest_path, 'JPEG', quality=90)
        print(f"  ✅ Created placeholder image: {dest_path}")
        return True

    except ImportError:
        print(f"  ❌ PIL not available, creating simple placeholder")
        # Create a simple text file as fallback
        with open(dest_path.with_suffix('.txt'), 'w') as f:
            f.write(f"Placeholder for: {title}\n")
            f.write(f"File: {dest_path}\n")
            f.write("Generated by Orson Vision Asset System\n")
        return False
    except Exception as e:
        print(f"  ❌ Failed to create placeholder: {e}")
        return False

def create_placeholder_video(dest_path, title):
    """Create a placeholder video file (actually just a text file for now)"""
    try:
        # For now, create a text file that represents a video
        # In a real implementation, you could use ffmpeg to create actual video files
        placeholder_file = dest_path.with_suffix('.txt')
        with open(placeholder_file, 'w') as f:
            f.write(f"Video Placeholder for: {title}\n")
            f.write(f"File: {dest_path}\n")
            f.write("Duration: 30 seconds\n")
            f.write("Resolution: 1920x1080\n")
            f.write("Generated by Orson Vision Asset System\n")

        print(f"  ✅ Created video placeholder: {placeholder_file}")
        return True

    except Exception as e:
        print(f"  ❌ Failed to create video placeholder: {e}")
        return False

def main():
    print("="*80)
    print("🎨 Creating Placeholder Assets for Orson Vision")
    print("="*80)

    success_count = 0
    total_count = len(MISSING_ASSETS)

    for asset_path, title in MISSING_ASSETS.items():
        print(f"\n📁 Asset: {asset_path}")
        print(f"🎨 Creating placeholder for: {title}")

        # Create directory
        dest_path = Path(asset_path)
        dest_path.parent.mkdir(parents=True, exist_ok=True)

        # Determine if it's a video or image
        is_video = asset_path.endswith('.mp4')

        if is_video:
            if create_placeholder_video(dest_path, title):
                success_count += 1
        else:
            if create_placeholder_image(dest_path, title):
                success_count += 1

        # Small delay to avoid overwhelming the system
        time.sleep(0.1)

    print(f"\n🎉 Placeholder Creation Summary:")
    print(f"✅ Successful: {success_count}/{total_count}")
    print(f"❌ Failed: {total_count - success_count}/{total_count}")

    if success_count > 0:
        print(f"\n📁 Placeholders created in: {Path.cwd()}")
        print("🔄 You may need to restart your Next.js dev server to see the new assets")
        print("💡 Note: Video placeholders are text files for now. Replace with actual videos later.")

if __name__ == "__main__":
    main()

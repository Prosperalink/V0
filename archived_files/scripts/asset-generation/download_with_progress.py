#!/usr/bin/env python3
"""
Orson Vision Website - Enhanced Asset Downloader with Progress Tracking
Downloads assets with real-time progress, time estimates, and asset counting
Supports video downloads with resume functionality
"""

import os
import requests
import json
import csv
from pathlib import Path
import time
import random
from urllib.parse import urlparse
import hashlib
from datetime import datetime, timedelta
import threading
from tqdm import tqdm

class EnhancedAssetDownloader:
    def __init__(self):
        self.base_dir = Path(".")
        self.downloaded_assets = []
        self.start_time = None
        self.total_sections = 0
        self.completed_sections = 0
        self.total_assets = 0
        self.downloaded_assets_count = 0
        self.download_progress = {}

        # Working public domain image URLs from Unsplash (10 per section)
        self.public_domain_images = {
            "hero_section": [
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
            ],
            "digital_innovation": [
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
            ],
            "creative_design": [
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
            ],
            "content_creation": [
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop"
            ],
            "technology_solutions": [
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
            ],
            "strategic_consulting": [
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
            ],
            "client_journey": [
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
            ],
            "success_stories": [
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
            ],
            "contact_section": [
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
            ]
        }

        # Video URLs for different sections (using Pexels free videos)
        self.public_domain_videos = {
            "cinematic_office": [
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            ],
            "creative_team": [
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            ],
            "digital_innovation": [
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            ],
            "creative_design": [
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            ],
            "content_creation": [
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            ],
            "technology_solutions": [
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            ],
            "strategic_consulting": [
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            ],
            "client_journey": [
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            ],
            "success_stories": [
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            ],
            "contact_section": [
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
                "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            ]
        }

    def count_existing_assets(self):
        """Count existing assets to avoid losing progress"""
        total_existing = 0
        for root, dirs, files in os.walk(self.base_dir):
            for file in files:
                if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.mp4', '.mov', '.avi')):
                    total_existing += 1
        return total_existing

    def get_file_size(self, url: str) -> int:
        """Get file size from URL for resume functionality"""
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
            response = requests.head(url, headers=headers, timeout=10)
            response.raise_for_status()
            return int(response.headers.get('content-length', 0))
        except:
            return 0

    def download_asset_with_resume(self, url: str, filepath: Path, is_video: bool = False) -> bool:
        """Download asset with resume capability for large files"""
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }

            # Check if file exists for resume
            resume_pos = 0
            if filepath.exists():
                resume_pos = filepath.stat().st_size
                if resume_pos > 0:
                    headers['Range'] = f'bytes={resume_pos}-'
                    print(f"    🔄 Resuming download from {resume_pos} bytes")

            response = requests.get(url, stream=True, timeout=60, headers=headers)
            response.raise_for_status()

            # Get total file size
            total_size = int(response.headers.get('content-length', 0))
            if resume_pos > 0:
                total_size += resume_pos

            # Download with progress bar for videos
            if is_video and total_size > 0:
                with open(filepath, 'ab' if resume_pos > 0 else 'wb') as f:
                    with tqdm(
                        total=total_size,
                        initial=resume_pos,
                        unit='B',
                        unit_scale=True,
                        desc=f"📹 {filepath.name}",
                        ncols=80
                    ) as pbar:
                        for chunk in response.iter_content(chunk_size=8192):
                            if chunk:
                                f.write(chunk)
                                pbar.update(len(chunk))
            else:
                # Regular download for images
                with open(filepath, 'ab' if resume_pos > 0 else 'wb') as f:
                    for chunk in response.iter_content(chunk_size=8192):
                        if chunk:
                            f.write(chunk)

            return True

        except requests.exceptions.RequestException as e:
            print(f"Error downloading {url}: {e}")
            return False
        except Exception as e:
            print(f"Unexpected error downloading {url}: {e}")
            return False

    def download_asset(self, url: str, filepath: Path) -> bool:
        """Download a single asset with better error handling (legacy method)"""
        return self.download_asset_with_resume(url, filepath, False)

    def create_directory_structure(self):
        """Create the complete directory structure for assets"""
        structure = {
            "homepage": {
                "hero_section": ["images", "videos"],
                "solutions_matrix": {
                    "digital_innovation": ["images", "videos"],
                    "creative_design": ["images", "videos"],
                    "content_creation": ["images", "videos"],
                    "technology_solutions": ["images", "videos"],
                    "strategic_consulting": ["images", "videos"]
                },
                "client_journey": ["images", "videos"],
                "success_stories": ["images", "videos"],
                "contact_section": ["images", "videos"]
            },
            "about": {
                "hero": ["images", "videos"],
                "mission": ["images", "videos"],
                "values": ["images", "videos"],
                "story": ["images", "videos"],
                "cinematic_humanism": ["images", "videos"],
                "team": ["images", "videos"],
                "cta": ["images", "videos"]
            },
            "contact": {
                "hero": ["images", "videos"],
                "contact_info": ["images", "videos"],
                "contact_form": ["images", "videos"]
            },
            "services": {
                "digital_innovation": ["images", "videos"],
                "creative_design": ["images", "videos"],
                "content_creation": ["images", "videos"],
                "technology_solutions": ["images", "videos"],
                "strategic_consulting": ["images", "videos"]
            },
            "blog": {
                "featured": ["images", "videos"],
                "articles": ["images", "videos"]
            },
            "careers": {
                "hero": ["images", "videos"],
                "culture": ["images", "videos"],
                "opportunities": ["images", "videos"]
            },
            "legal": {
                "privacy": ["images", "videos"],
                "terms": ["images", "videos"]
            }
        }

        for page, sections in structure.items():
            page_dir = self.base_dir / page
            page_dir.mkdir(exist_ok=True)

            for section, media_types in sections.items():
                if isinstance(media_types, dict):
                    # Nested sections like solutions_matrix
                    section_dir = page_dir / section
                    section_dir.mkdir(exist_ok=True)

                    for subsection, media_types in media_types.items():
                        subsection_dir = section_dir / subsection
                        subsection_dir.mkdir(exist_ok=True)

                        for media_type in media_types:
                            media_dir = subsection_dir / media_type
                            media_dir.mkdir(exist_ok=True)
                else:
                    # Simple sections
                    section_dir = page_dir / section
                    section_dir.mkdir(exist_ok=True)

                    for media_type in media_types:
                        media_dir = section_dir / media_type
                        media_dir.mkdir(exist_ok=True)

    def generate_filename(self, page: str, section: str, keyword: str, index: int, extension: str) -> str:
        """Generate SEO-friendly filename"""
        clean_page = page.replace("-", "_")

        # Handle nested sections like solutions_matrix/digital_innovation
        if "/" in section:
            main_section, subsection = section.split("/", 1)
            clean_section = f"{main_section}_{subsection}".replace("-", "_")
        else:
            clean_section = section.replace("-", "_")

        clean_keyword = keyword.replace(" ", "_").replace("-", "_").lower()

        return f"{clean_page}_{clean_section}_{clean_keyword}_{index:02d}.{extension}"

    def create_metadata_file(self, asset_dir: Path, assets: list, page: str, section: str):
        """Create metadata CSV file for assets"""
        metadata_file = asset_dir / "metadata.csv"

        with open(metadata_file, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = [
                'filename', 'alt_text', 'title', 'description', 'keywords',
                'source_url', 'license_info', 'file_size', 'dimensions'
            ]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()

            for asset in assets:
                writer.writerow({
                    'filename': asset.get('filename', ''),
                    'alt_text': asset.get('alt_text', ''),
                    'title': asset.get('title', ''),
                    'description': asset.get('description', ''),
                    'keywords': asset.get('keywords', ''),
                    'source_url': asset.get('source_url', ''),
                    'license_info': asset.get('license_info', 'Public Domain'),
                    'file_size': asset.get('file_size', ''),
                    'dimensions': asset.get('dimensions', '1920x1080')
                })

    def print_progress(self):
        """Print real-time progress information"""
        if self.start_time:
            elapsed_time = time.time() - self.start_time
            elapsed_str = str(timedelta(seconds=int(elapsed_time)))

            if self.completed_sections > 0:
                avg_time_per_section = elapsed_time / self.completed_sections
                remaining_sections = self.total_sections - self.completed_sections
                estimated_remaining = avg_time_per_section * remaining_sections
                eta_str = str(timedelta(seconds=int(estimated_remaining)))

                progress_percent = (self.completed_sections / self.total_sections) * 100

                print(f"\n{'='*60}")
                print(f"📊 PROGRESS UPDATE")
                print(f"{'='*60}")
                print(f"✅ Completed Sections: {self.completed_sections}/{self.total_sections} ({progress_percent:.1f}%)")
                print(f"📁 Total Assets Downloaded: {self.downloaded_assets_count}")
                print(f"⏱️  Elapsed Time: {elapsed_str}")
                print(f"⏳ Estimated Time Remaining: {eta_str}")
                print(f"📈 Average Time per Section: {avg_time_per_section:.1f} seconds")
                print(f"{'='*60}\n")

    def process_section(self, page: str, section: str, media_type: str, count: int = 10):
        """Process a single section to download assets (images and videos)"""
        print(f"\n🔄 Processing: {page}/{section}/{media_type}")

        # Determine asset directory
        if "/" in section:
            # Nested section like solutions_matrix/digital_innovation
            main_section, subsection = section.split("/", 1)
            asset_dir = self.base_dir / page / main_section / subsection / media_type
        else:
            asset_dir = self.base_dir / page / section / media_type

        asset_dir.mkdir(parents=True, exist_ok=True)

        downloaded_assets = []

        # Get relevant keyword for this section
        keyword_map = {
            "hero_section": "cinematic_office",
            "solutions_matrix/digital_innovation": "digital_innovation",
            "solutions_matrix/creative_design": "creative_design",
            "solutions_matrix/content_creation": "content_creation",
            "solutions_matrix/technology_solutions": "technology_solutions",
            "solutions_matrix/strategic_consulting": "strategic_consulting",
            "client_journey": "client_journey",
            "success_stories": "success_stories",
            "contact_section": "contact_section"
        }

        keyword = keyword_map.get(section, "cinematic_office")

        # Process images
        if media_type == "images" and keyword in self.public_domain_images:
            urls = self.public_domain_images[keyword]

            for i, url in enumerate(urls[:count]):
                # Generate filename
                filename = self.generate_filename(page, section, keyword, i + 1, "jpg")
                filepath = asset_dir / filename

                # Skip if file already exists
                if filepath.exists():
                    print(f"    ⏭️  Skipped (already exists): {filename}")
                    continue

                # Download asset
                if self.download_asset_with_resume(url, filepath, is_video=False):
                    # Create metadata
                    asset_metadata = {
                        'filename': filename,
                        'alt_text': f"{keyword.replace('_', ' ').title()} for {section.replace('_', ' ').title()}",
                        'title': f"{keyword.replace('_', ' ').title()} - {section.replace('_', ' ').title()}",
                        'description': f"High-quality {keyword} image for {section} section",
                        'keywords': f"{keyword}, {section}, {page}, professional, business",
                        'source_url': url,
                        'license_info': 'Public Domain',
                        'file_size': f"{filepath.stat().st_size} bytes",
                        'dimensions': '1920x1080'
                    }

                    downloaded_assets.append(asset_metadata)
                    self.downloaded_assets_count += 1
                    print(f"    ✅ Downloaded: {filename}")

                    # Rate limiting
                    time.sleep(random.uniform(0.5, 1.5))

        # Process videos
        elif media_type == "videos" and keyword in self.public_domain_videos:
            urls = self.public_domain_videos[keyword]

            for i, url in enumerate(urls[:count]):
                # Generate filename
                filename = self.generate_filename(page, section, keyword, i + 1, "mp4")
                filepath = asset_dir / filename

                # Skip if file already exists and is complete
                if filepath.exists():
                    file_size = filepath.stat().st_size
                    expected_size = self.get_file_size(url)
                    if expected_size > 0 and file_size >= expected_size * 0.95:  # Allow 5% tolerance
                        print(f"    ⏭️  Skipped (already exists): {filename}")
                        continue

                # Download video with resume capability
                if self.download_asset_with_resume(url, filepath, is_video=True):
                    # Create metadata
                    asset_metadata = {
                        'filename': filename,
                        'alt_text': f"{keyword.replace('_', ' ').title()} video for {section.replace('_', ' ').title()}",
                        'title': f"{keyword.replace('_', ' ').title()} Video - {section.replace('_', ' ').title()}",
                        'description': f"High-quality {keyword} video for {section} section",
                        'keywords': f"{keyword}, {section}, {page}, video, professional, business",
                        'source_url': url,
                        'license_info': 'Public Domain',
                        'file_size': f"{filepath.stat().st_size} bytes",
                        'dimensions': '1920x1080'
                    }

                    downloaded_assets.append(asset_metadata)
                    self.downloaded_assets_count += 1
                    print(f"    ✅ Downloaded: {filename}")

                    # Rate limiting for videos (longer due to file size)
                    time.sleep(random.uniform(2, 4))

        # Create metadata file
        if downloaded_assets:
            self.create_metadata_file(asset_dir, downloaded_assets, page, section)
            print(f"  📝 Completed: {len(downloaded_assets)} {media_type} downloaded")
        else:
            print(f"  ⚠️  No new {media_type} downloaded for {section}")

        self.completed_sections += 1
        self.print_progress()

    def run_download(self):
        """Run the asset download process with progress tracking"""
        print("🚀 Starting Orson Vision Website Asset Acquisition")
        print("=" * 60)

        # Count existing assets
        existing_assets = self.count_existing_assets()
        print(f"📁 Existing assets found: {existing_assets}")

        # Create directory structure
        self.create_directory_structure()

        # Define sections to process (homepage images only, 10 per section)
        sections_to_process = [
            # Homepage - Images (10 per section)
            ("homepage", "hero_section", "images", 10),
            ("homepage", "solutions_matrix/digital_innovation", "images", 10),
            ("homepage", "solutions_matrix/creative_design", "images", 10),
            ("homepage", "solutions_matrix/content_creation", "images", 10),
            ("homepage", "solutions_matrix/technology_solutions", "images", 10),
            ("homepage", "solutions_matrix/strategic_consulting", "images", 10),
            ("homepage", "client_journey", "images", 10),
            ("homepage", "success_stories", "images", 10),
            ("homepage", "contact_section", "images", 10),
        ]

        self.total_sections = len(sections_to_process)
        self.start_time = time.time()

        print(f"📋 Total sections to process: {self.total_sections}")
        print(f"⏰ Starting download process...\n")

        # Process each section
        for page, section, media_type, count in sections_to_process:
            self.process_section(page, section, media_type, count)
            time.sleep(random.uniform(1, 2))  # Rate limiting between sections

        # Final summary
        total_time = time.time() - self.start_time
        total_time_str = str(timedelta(seconds=int(total_time)))
        final_assets = self.count_existing_assets()

        print("\n" + "=" * 60)
        print("🎉 ASSET ACQUISITION COMPLETED!")
        print("=" * 60)
        print(f"📁 Total assets in library: {final_assets}")
        print(f"⏱️  Total time: {total_time_str}")
        print(f"📈 Assets downloaded this session: {self.downloaded_assets_count}")
        print(f"📊 Average time per section: {total_time/self.total_sections:.1f} seconds")
        print("=" * 60)

if __name__ == "__main__":
    downloader = EnhancedAssetDownloader()
    downloader.run_download()

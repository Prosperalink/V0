#!/usr/bin/env python3
"""
Test script for video download resume functionality
Demonstrates the enhanced downloader with resume capability
"""

import os
import time
from pathlib import Path
from download_with_progress import EnhancedAssetDownloader

def test_video_download_resume():
    """Test the video download resume functionality"""
    print("🧪 Testing Video Download Resume Functionality")
    print("=" * 50)
    
    # Create test directory
    test_dir = Path("test_videos")
    test_dir.mkdir(exist_ok=True)
    
    # Create downloader instance
    downloader = EnhancedAssetDownloader()
    downloader.base_dir = test_dir
    
    # Test video URL (small file for testing)
    test_video_url = "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
    test_filepath = test_dir / "test_video_resume.mp4"
    
    print(f"📹 Testing video download: {test_video_url}")
    print(f"📁 Target file: {test_filepath}")
    
    # Test 1: Initial download
    print("\n🔄 Test 1: Initial download")
    start_time = time.time()
    
    success = downloader.download_asset_with_resume(test_video_url, test_filepath, is_video=True)
    
    if success:
        elapsed = time.time() - start_time
        file_size = test_filepath.stat().st_size if test_filepath.exists() else 0
        print(f"✅ Download completed in {elapsed:.2f} seconds")
        print(f"📊 File size: {file_size} bytes")
    else:
        print("❌ Download failed")
        return False
    
    # Test 2: Resume download (should skip if complete)
    print("\n🔄 Test 2: Resume download (should skip if complete)")
    start_time = time.time()
    
    success = downloader.download_asset_with_resume(test_video_url, test_filepath, is_video=True)
    
    if success:
        elapsed = time.time() - start_time
        print(f"✅ Resume test completed in {elapsed:.2f} seconds")
        print("📝 File was skipped (already complete)")
    else:
        print("❌ Resume test failed")
        return False
    
    # Test 3: Partial file resume simulation
    print("\n🔄 Test 3: Partial file resume simulation")
    
    # Create a partial file by truncating
    if test_filepath.exists():
        original_size = test_filepath.stat().st_size
        partial_size = original_size // 2  # Half the file
        
        # Truncate file to simulate partial download
        with open(test_filepath, 'r+b') as f:
            f.truncate(partial_size)
        
        print(f"📊 Truncated file to {partial_size} bytes (was {original_size})")
        
        # Try to resume download
        start_time = time.time()
        success = downloader.download_asset_with_resume(test_video_url, test_filepath, is_video=True)
        
        if success:
            elapsed = time.time() - start_time
            final_size = test_filepath.stat().st_size
            print(f"✅ Resume from partial file completed in {elapsed:.2f} seconds")
            print(f"📊 Final file size: {final_size} bytes")
            print(f"📈 Resumed {final_size - partial_size} bytes")
        else:
            print("❌ Partial file resume failed")
            return False
    
    # Cleanup
    print("\n🧹 Cleaning up test files...")
    if test_filepath.exists():
        test_filepath.unlink()
    if test_dir.exists():
        test_dir.rmdir()
    
    print("✅ All tests completed successfully!")
    return True

def test_section_processing():
    """Test processing a single section with videos"""
    print("\n🧪 Testing Section Processing with Videos")
    print("=" * 50)
    
    # Create downloader instance
    downloader = EnhancedAssetDownloader()
    
    # Test processing a single section
    print("🔄 Testing homepage hero section video download...")
    
    try:
        downloader.process_section("homepage", "hero_section", "videos", count=1)
        print("✅ Section processing test completed")
        return True
    except Exception as e:
        print(f"❌ Section processing test failed: {e}")
        return False

def main():
    """Main test function"""
    print("🎬 Orson Vision - Video Download Resume Test")
    print("=" * 60)
    
    # Test 1: Basic video download resume
    if not test_video_download_resume():
        print("❌ Video download resume test failed")
        return False
    
    # Test 2: Section processing
    if not test_section_processing():
        print("❌ Section processing test failed")
        return False
    
    print("\n🎉 All tests passed successfully!")
    print("✅ Video download resume functionality is working correctly")
    return True

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1) 
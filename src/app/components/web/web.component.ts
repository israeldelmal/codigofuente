import { Component } from "@angular/core";
import { VideosData } from './data/data';

@Component({
    selector: 'app-web',
    templateUrl: './web.component.html',
    styleUrls: [ './web.component.scss' ]
})
export class WebComponent {
    videosData = VideosData;
    statusBundle = false;
    videoSelect = false;
    videoArray: any[] = [];
    boolSelectAll: boolean;
    isMobileActive = false;

    toggleBundle(status?: boolean) {
        this.statusBundle = status ? status : !this.statusBundle;
        this.videoSelect = false;
    }

    toggleVideoSelect(status?: boolean) {
        this.videoSelect = status ? status : !this.videoSelect;
    }

    addVideo(video: any, event: any) {
        if (this.statusBundle) {
            if (event)
                this.videoArray.push(video);
            else {
                this.videoArray = this.videoArray.filter(x => x != video);
                video.checked = false;
            }
        } else {
            video.checked = false;
        }
    }

    cancelBundle() {
        this.videoArray.forEach(video => {
            video.checked = false
        });

        this.videoArray = [];

        this.statusBundle = false;

        this.boolSelectAll = false;
    }

    selectAllVideos(event: boolean) {
        if (event) {
            this.videoArray.forEach(video => {
                video.checked = false
            });
    
            this.videoArray = [];

            this.videosData.forEach(div => {
                div.videos.forEach(video => {
                    video.checked = true;
                    this.videoArray.push(video);
                })
            });
        } else {
            this.videoArray.forEach(video => {
                video.checked = false
            });
    
            this.videoArray = [];
        }
    }

    activeNav(status?: boolean) {
        this.isMobileActive = status ? status : !this.isMobileActive;
    }
}
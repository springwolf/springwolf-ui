import { Component, OnInit } from '@angular/core';
import { AsyncApiService } from '../shared/asyncapi.service';
import { Channel } from '../shared/models/channel.model';
import { subscribeOn } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {Location} from "@angular/common";

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  static CHANNEL_ANCHOR_PREFIX = "channel-"

  channels: Channel[];
  selectedChannel: string;
  nameSubscription: Subscription;
  docName: string;

  constructor(private asyncApiService: AsyncApiService, private location: Location) {
    this.setChannelSelectionFromLocation()
  }

  ngOnInit(): void {
    this.location.subscribe(() : void => this.setChannelSelectionFromLocation())

    this.nameSubscription = this.asyncApiService.getCurrentAsyncApiName().subscribe(name => {
      this.docName = name;
      this.asyncApiService.getAsyncApis().subscribe(asyncapi => this.channels = asyncapi.get(name).channels);
    });
  }

  setChannelSelection(channel: Channel): void {
    window.location.hash = '#' + this.getChannelIdentifier(channel)
  }
  setChannelSelectionFromLocation(): void {
    const anchor = window.location.hash.substr(1);
    if(anchor.startsWith(ChannelsComponent.CHANNEL_ANCHOR_PREFIX)) {
      this.selectedChannel = anchor;
    }
  }

  getChannelIdentifier(channel: Channel) {
    return ChannelsComponent.CHANNEL_ANCHOR_PREFIX + channel.name + "-" + channel.operation.type.replace(' ', '-')
  }
}

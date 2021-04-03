export interface MediaPlayerState {
    icon: string;
    play: () => MediaPlayerState;
    pause: () => MediaPlayerState;
    next: () => MediaPlayerState;
    previous: () => MediaPlayerState
    repeat: () => MediaPlayerState;
}

export class MediaPlayerPlayState implements MediaPlayerState{
    icon: string = "pause-icon"
    play = (): MediaPlayerState => this;
    pause = (): MediaPlayerState => {
        console.log("Pause the current song...");
        return new MediaPlayerPauseState();
    }
    next = (): MediaPlayerState => {
        console.log("Playing the next song...")
        return this;
    }
    previous = (): MediaPlayerState => {
        console.log("Playing the previous song...")
        return this;
    }
    repeat = (): MediaPlayerState => {
        console.log("Setting up repeat ...");
        return new MediaPlayerPlayAndRepeatState()
    }
}

export class MediaPlayerPauseState implements MediaPlayerState{
    icon: string = "play-icon"
    play = (): MediaPlayerState => {
        console.log("Playing the current song...");
        return new MediaPlayerPlayState()
    }
    pause = (): MediaPlayerState => this;
    next = (): MediaPlayerState => {
        console.log("Playing the next song...")
        return new MediaPlayerPlayState()
    }
    previous = (): MediaPlayerState => {
        console.log("Playing the previous song...")
        return new MediaPlayerPlayState()
    }
    repeat = (): MediaPlayerState => {
        console.log("Enable repeat ...");
        return new MediaPlayerPauseAndRepeatState()
    }
}

export class MediaPlayerPlayAndRepeatState implements MediaPlayerPlayState {
    icon: string = "pause-icon"
    play = (): MediaPlayerState => this;
    pause = (): MediaPlayerState => {
        console.log("Pause the current song...");
        return new MediaPlayerPauseAndRepeatState();
    };
    next = (): MediaPlayerState => {
        console.log("Playing the next song...")
        return this;
    }
    previous = (): MediaPlayerState => {
        console.log("Playing the current song from the start...")
        return this;
    }
    repeat = (): MediaPlayerState => {
        console.log("Disable repeat ...");
        return new MediaPlayerPlayState()
    }
}

export class MediaPlayerPauseAndRepeatState implements MediaPlayerPlayState {
    icon: string = "play-icon"
    play = (): MediaPlayerState => {
        console.log("Playing the current song...")
        return new MediaPlayerPlayAndRepeatState();
    }
    pause = (): MediaPlayerState => this;
    next = (): MediaPlayerState => {
        console.log("Playing the next song...")
        return new MediaPlayerPlayAndRepeatState();
    }
    previous = (): MediaPlayerState => {
        console.log("Playing the current song from the start...")
        return new MediaPlayerPlayAndRepeatState();
    }
    repeat = (): MediaPlayerState => {
        console.log("Disable repeat ...");
        return new MediaPlayerPauseState()
    }
}
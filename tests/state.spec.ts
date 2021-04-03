import {
    MediaPlayerPauseAndRepeatState,
    MediaPlayerPauseState,
    MediaPlayerPlayAndRepeatState,
    MediaPlayerPlayState
} from '../src/state/media-player-state'

describe('MediaPlayerPlayState', () => {
  it('play should return pause icon', () => {
    const sut = new MediaPlayerPlayState()
    const result = sut.icon
    expect(result).toBe('pause-icon')
  })
  it('play should return MediaPlayerPlayState', () => {
    const sut = new MediaPlayerPlayState()
    const result = sut.play()
    expect(result).toBeInstanceOf(MediaPlayerPlayState)
  })
  it('pause should return MediaPlayerPauseState', () => {
    const sut = new MediaPlayerPlayState()
    const result = sut.pause()
    expect(result).toBeInstanceOf(MediaPlayerPauseState)
  })
  it('next should return MediaPlayerPlayState', () => {
    const sut = new MediaPlayerPlayState()
    const result = sut.next()
    expect(result).toBeInstanceOf(MediaPlayerPlayState)
  })
  it('previous should return MediaPlayerPlayState', () => {
    const sut = new MediaPlayerPlayState()
    const result = sut.previous()
    expect(result).toBeInstanceOf(MediaPlayerPlayState)
  })
  it('repeat should return MediaPlayerPlayAndRepeatState', () => {
    const sut = new MediaPlayerPlayState()
    const result = sut.repeat()
    expect(result).toBeInstanceOf(MediaPlayerPlayAndRepeatState)
  })
})

describe('MediaPlayerPauseState', () => {
  it('play should return play icon', () => {
    const sut = new MediaPlayerPauseState()
    const result = sut.icon
    expect(result).toBe('play-icon')
  })
  it('play should return MediaPlayerPlayState', () => {
    const sut = new MediaPlayerPauseState()
    const result = sut.play()
    expect(result).toBeInstanceOf(MediaPlayerPlayState)
  })
  it('pause should return MediaPlayerPauseState', () => {
    const sut = new MediaPlayerPauseState()
    const result = sut.pause()
    expect(result).toBeInstanceOf(MediaPlayerPauseState)
  })
  it('next should return MediaPlayerPlayState', () => {
    const sut = new MediaPlayerPauseState()
    const result = sut.next()
    expect(result).toBeInstanceOf(MediaPlayerPlayState)
  })
  it('previous should return MediaPlayerPlayState', () => {
    const sut = new MediaPlayerPauseState()
    const result = sut.previous()
    expect(result).toBeInstanceOf(MediaPlayerPlayState)
  })
  it('repeat should return MediaPlayerPauseAndRepeatState', () => {
    const sut = new MediaPlayerPauseState()
    const result = sut.repeat()
    expect(result).toBeInstanceOf(MediaPlayerPauseAndRepeatState)
  })
})

describe('MediaPlayerPlayAndRepeatState', () => {
  it('play should return pause icon', () => {
    const sut = new MediaPlayerPlayAndRepeatState()
    const result = sut.icon
    expect(result).toBe('pause-icon')
  })
  it('play should return MediaPlayerPlayAndRepeatState', () => {
    const sut = new MediaPlayerPlayAndRepeatState()
    const result = sut.play()
    expect(result).toBeInstanceOf(MediaPlayerPlayAndRepeatState)
  })
  it('pause should return MediaPlayerPauseAndRepeatState', () => {
    const sut = new MediaPlayerPlayAndRepeatState()
    const result = sut.pause()
    expect(result).toBeInstanceOf(MediaPlayerPauseAndRepeatState)
  })
  it('next should return MediaPlayerPlayAndRepeatState', () => {
    const sut = new MediaPlayerPlayAndRepeatState()
    const result = sut.next()
    expect(result).toBeInstanceOf(MediaPlayerPlayAndRepeatState)
  })
  it('previous should return MediaPlayerPlayAndRepeatState', () => {
    const sut = new MediaPlayerPlayAndRepeatState()
    const result = sut.previous()
    expect(result).toBeInstanceOf(MediaPlayerPlayAndRepeatState)
  })
  it('repeat should return MediaPlayerPlayState', () => {
    const sut = new MediaPlayerPlayAndRepeatState()
    const result = sut.repeat()
    expect(result).toBeInstanceOf(MediaPlayerPlayState)
  })
})

describe('MediaPlayerPauseAndRepeatState', () => {
  it('play should return play icon', () => {
    const sut = new MediaPlayerPauseAndRepeatState()
    const result = sut.icon
    expect(result).toBe('play-icon')
  })
  it('play should return MediaPlayerPlayAndRepeatState', () => {
    const sut = new MediaPlayerPauseAndRepeatState()
    const result = sut.play()
    expect(result).toBeInstanceOf(MediaPlayerPlayAndRepeatState)
  })
  it('pause should return MediaPlayerPauseAndRepeatState', () => {
    const sut = new MediaPlayerPauseAndRepeatState()
    const result = sut.pause()
    expect(result).toBeInstanceOf(MediaPlayerPauseAndRepeatState)
  })
  it('next should return MediaPlayerPlayAndRepeatState', () => {
    const sut = new MediaPlayerPauseAndRepeatState()
    const result = sut.next()
    expect(result).toBeInstanceOf(MediaPlayerPlayAndRepeatState)
  })
  it('previous should return MediaPlayerPlayAndRepeatState', () => {
    const sut = new MediaPlayerPauseAndRepeatState()
    const result = sut.previous()
    expect(result).toBeInstanceOf(MediaPlayerPlayAndRepeatState)
  })
  it('repeat should return MediaPlayerPauseState', () => {
    const sut = new MediaPlayerPauseAndRepeatState()
    const result = sut.repeat()
    expect(result).toBeInstanceOf(MediaPlayerPauseState)
  })
})

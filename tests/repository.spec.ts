import {
    BaseRepository,
    CandidateRepository,
    GlobalRepository,
    InterviewerRepository,
    InterviewRepository
} from '../src/repository/repository'

describe('Base Repository', () => {
  it('should have a method get', () => {
    const repository = new BaseRepository('http://contoso.com')
    expect(repository).toHaveProperty('get')
  })
  it('should have a method getById', () => {
    const repository = new BaseRepository('http://contoso.com')
    expect(repository).toHaveProperty('getById')
  })
})

describe('CandidateRepository', () => {
  it('should have a method get', () => {
    const repository = new CandidateRepository('http://contoso.com')
    expect(repository).toHaveProperty('get')
  })
  it('should have a method getById', () => {
    const repository = new CandidateRepository('http://contoso.com')
    expect(repository).toHaveProperty('getById')
  })
  it('should have a method getCandidate', () => {
    const repository = new CandidateRepository('http://consoto.com')
    expect(repository).toHaveProperty('getCandidates')
  })
  it('should have a method getCandidateById', () => {
    const repository = new CandidateRepository('http://consoto.com')
    expect(repository).toHaveProperty('getCandidateById')
  })
})

describe('InterviewRepository', () => {
  it('should have a method get', () => {
    const repository = new InterviewRepository('http://contoso.com')
    expect(repository).toHaveProperty('get')
  })
  it('should have a method getById', () => {
    const repository = new InterviewRepository('http://contoso.com')
    expect(repository).toHaveProperty('getById')
  })
  it('should have a method getInterview', () => {
    const repository = new InterviewRepository('http://consoto.com')
    expect(repository).toHaveProperty('getInterviews')
  })
  it('should have a method getInterviewById', () => {
    const repository = new InterviewRepository('http://consoto.com')
    expect(repository).toHaveProperty('getInterviewById')
  })
})

describe('InterviewerRepository', () => {
  it('should have a method get', () => {
    const repository = new InterviewerRepository('http://contoso.com')
    expect(repository).toHaveProperty('get')
  })
  it('should have a method getById', () => {
    const repository = new InterviewerRepository('http://contoso.com')
    expect(repository).toHaveProperty('getById')
  })
  it('should have a method getInterviewer', () => {
    const repository = new InterviewerRepository('http://consoto.com')
    expect(repository).toHaveProperty('getInterviewers')
  })
  it('should have a method getInterviewerById', () => {
    const repository = new InterviewerRepository('http://consoto.com')
    expect(repository).toHaveProperty('getInterviewerById')
  })
})

describe('GlobalRepository', () => {
  it('should have a method get', () => {
    const repository = new GlobalRepository('http://contoso.com')
    expect(repository).toHaveProperty('get')
  })
  it('should have a method getById', () => {
    const repository = new GlobalRepository('http://contoso.com')
    expect(repository).toHaveProperty('getById')
  })
  it('should have a method getCandidate', () => {
    const repository = new GlobalRepository('http://consoto.com')
    expect(repository).toHaveProperty('getInterviewers')
  })
  it('should have a method getCandidateById', () => {
    const repository = new GlobalRepository('http://consoto.com')
    expect(repository).toHaveProperty('getInterviewerById')
  })
  it('should have a method getInterview', () => {
    const repository = new GlobalRepository('http://consoto.com')
    expect(repository).toHaveProperty('getInterviews')
  })
  it('should have a method getInterviewById', () => {
    const repository = new GlobalRepository('http://consoto.com')
    expect(repository).toHaveProperty('getInterviewById')
  })
  it('should have a method getInterviewer', () => {
    const repository = new GlobalRepository('http://consoto.com')
    expect(repository).toHaveProperty('getInterviewers')
  })
  it('should have a method getInterviewerById', () => {
    const repository = new GlobalRepository('http://consoto.com')
    expect(repository).toHaveProperty('getInterviewerById')
  })
})

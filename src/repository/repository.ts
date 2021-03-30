import { Candidate } from './candidate-interface'
import { Interview } from './interview-interface'
import { Interviewer } from './interviewer-interface'

export type Constructor<T> = new (...args: any[]) => T

export class BaseRepository {
  constructor (private baseUrl: string) {}
  get = async <T>(ressource: string, init?: RequestInit): Promise<T[]> => {
    return (await fetch(`${this.baseUrl}/${ressource}`, init)).json()
  }
  getById = async <T, TKey>(
    ressource: string,
    id: TKey,
    init?: RequestInit
  ): Promise<T> => {
    return (await fetch(`${this.baseUrl}/${ressource}/${id}`, init)).json()
  }
}

export const CandidateRepo = <TBase extends Constructor<BaseRepository>>(
  Base: TBase
) => {
  return class extends Base {
    getCandidates = (): Promise<Candidate[]> => {
      return this.get('candidates')
    }
    getCandidateById = (id: string): Promise<Candidate> => {
      return this.getById('candidates', id)
    }
  }
}

export const InterviewRepo = <TBase extends Constructor<BaseRepository>>(
  Base: TBase
) => {
  return class extends Base {
    getInterviews = (): Promise<Interview[]> => {
      return this.get('interviews')
    }
    getInterviewById = (id: string): Promise<Interview> => {
      return this.getById('interview', id)
    }
  }
}

export const InterviewerRepo = <TBase extends Constructor<BaseRepository>>(
    Base: TBase
  ) => {
    return class extends Base {
      getInterviewers = (): Promise<Interviewer[]> => {
        return this.get('interviewers')
      }
      getInterviewerById = (id: string): Promise<Interviewer> => {
        return this.getById('interviewers', id)
      }
    }
}

export class CandidateRepository extends CandidateRepo(BaseRepository) {}
export class InterviewRepository extends InterviewRepo(BaseRepository) {}
export class InterviewerRepository extends InterviewerRepo(BaseRepository) {}
export class GlobalRepository extends CandidateRepo(InterviewRepo(InterviewerRepo(BaseRepository))) {}
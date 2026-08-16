import { teamMembers } from '../data/teamMemberData'
import { TeamMemberCard } from './TeamCard'

export function TeamGrid() {
  return (
    <section className="rounded-sm border border-zinc-700 bg-zinc-950 p-8">
      <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}

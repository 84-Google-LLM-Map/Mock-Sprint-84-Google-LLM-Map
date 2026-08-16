import type { TeamMember } from '../data/teamMemberData'

type TeamMemberCardProps = {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="flex min-h-[320px] flex-col items-center justify-center rounded-sm border border-zinc-700 bg-zinc-800 p-6 text-center">
      <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-zinc-200">
        <img src={member.image} className="h-full w-full object-cover" />
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-white">{member.name}</h2>

        <p className="mt-1 text-sm text-zinc-400">{member.role}</p>

        <p className="mt-3 text-sm text-zinc-300">{member.blurb}</p>
      </div>
    </article>
  )
}

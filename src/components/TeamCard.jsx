export default function TeamCard({ person, cardClass = 'team-card', frameClass = 'photo-frame' }) {
  return (
    <div className={cardClass} style={{ animationDelay: person.delay }}>
      <div className="idx">{person.idx}</div>
      <div className={frameClass}>
        <img className={person.photoClass} src={person.img} alt={person.alt} />
        <div className="corner tl"></div>
        <div className="corner br"></div>
        <div className="scan-line"></div>
        <div className="tag">{person.code}</div>
      </div>
      <div className="name">{person.name}</div>
      <div className="role">{person.role}</div>
      <div className="rule"></div>
    </div>
  );
}

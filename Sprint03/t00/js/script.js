let superTeam = {
    title: prompt("Enter team name, please: "),
    leader: prompt("Enter team's leader name, please: "),
    members: prompt("Who are the members of your team? Separate each name with commas."),
    agenda: prompt("Enter he goals and ideas of the team: "),
    isEvil: confirm("Is your team evil?"),
}
alert(`Here’s the team:
name - ${superTeam.name}
leader - ${superTeam.leader}
members - ${superTeam.members}
membercount - ${superTeam.members.split(",").length + 1}
agenda - ${superTeam.agenda}
isEvil - ${superTeam.isEvil}`);


function doProjects(input) {
    let name = input.shift();
    let projectsCount = input.shift();
    let hoursNeeded = projectsCount * 3;
    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${projectsCount} project/s.`)

}
doProjects(['George', 4])
doProjects(['Sanya', 9])
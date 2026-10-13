function welcome(name: string) {
    console.log(`Welcome ${name} to the TypeScript world!`)

    const user = {
        name: 'jaimin',
    }
    const fname = user.name

    return name + fname
}
welcome('jaimin')

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: '22cf0cf9f1af701fe045',
            clientSecret: '5bf1576d5dee4bbde51c5c8a6527ff1e861308c5',
        }),
        // ...add more providers here
    ],
})
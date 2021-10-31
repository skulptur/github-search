export const About = (): JSX.Element => {
  return (
    <p>
      This app displays trending repos on github and allows you to save them. Saving will copy all the information to
      localStorage and read from there instead of making new API calls. It uses the public Github API which is rate
      limited. In case you can't view the repos, try again in a minute!!!
    </p>
  )
}

export function oauthGithubUrl(): string {
  const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || ''
  const redirectUri = `${process.env.NEXT_PUBLIC_API_SERVICE}/auth/github`
  const path = '/'

  return `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}?path=${path}&scope=user:email`
}

export function oauthGoogleUrl(): string {
  const redirectUri = `${process.env.NEXT_PUBLIC_API_SERVICE}/auth/google`
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''
  const scope = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ].join(' ')

  return `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`
}

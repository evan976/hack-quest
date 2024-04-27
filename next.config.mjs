/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test?.test?.('.svg')
    )
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        // @see https://github.com/gregberge/svgr/issues/860
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...fileLoaderRule.resourceQuery.not, /url/],
        },
        use: [{
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        }],
      },
    )
    fileLoaderRule.exclude = /\.svg$/i

    return config
  } 
}

export default nextConfig

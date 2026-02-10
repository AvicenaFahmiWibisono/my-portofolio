module.exports = {
  apps: [
    {
      name: 'my-portofolio',
      script: 'npm',
      args: 'start -- -p 3002',
      cwd: '/var/www/my-portofolio',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3002
      }
    },
    {
      name: 'portfolio-tunnel',
      script: 'cloudflared',
      args: '--config /var/www/my-portofolio/cloudflared-config.yml tunnel run',
      cwd: '/var/www/my-portofolio',
      autorestart: true,
      watch: false,
    },
  ],
};

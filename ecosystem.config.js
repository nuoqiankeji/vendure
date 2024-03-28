module.exports = {
    apps: [
        {
            name: 'shop', // 你的应用名称
            script: 'npm run dev-server:start', // 要执行的脚本，这里使用 npm
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '2G',
            env: {
                APP_ENV: 'production',
                NODE_ENV: 'production',
            },
        },
    ],
};

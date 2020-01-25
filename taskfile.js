import bs from 'taskr-build/fw/servor';
let mode = "dev";
let dest = "dist";

export async function js(task) {
    await task.source('src/vue/app.js').build({
            fw: 'vue',
            env: mode,
    }).target(dest);
}

export async function html(task) {
    await task.source('src/html/index.html').target(dest)
}

// mode production
export async function prod(task) {
    mode = 'prod';
    dest = 'bundle';
    await task.parallel(['html', 'js']);
}

export async function dev(task) {
    await task.parallel(['html', 'js']);
    await task.watch('src/html/index.html', 'html');
    await task.watch('src/vue/**/*.*', 'js');
    mode == 'dev' && bs.start({
            root: 'dist',
            port: 9000,
        });
}

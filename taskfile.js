import bs from 'taskr-build/fw/servor';
bs.start({
    root: 'dist',
    port: 9000
});

export default async function (task) {
    await task.parallel(['html', 'js'])
    await task.watch('src/html/index.html', 'html')
    await task.watch('src/vue/**/*.*', 'js')
}

export async function js(task) {
    await task.source('src/vue/app.js').build({
        fw: "vue",
        env: "development"
    }).target('dist');
}

export async function html(task) {
    await task.source('src/html/index.html').target('dist')
}

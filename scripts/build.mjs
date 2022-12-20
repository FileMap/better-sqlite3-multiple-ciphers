#!/usr/bin/env zx

const archs = process.platform === 'win32' ? ['x64'] : ['x64', 'arm64'];

const nodeVersions = ['16.0.0'];
const electronVersions = ['21.0.0'];

for (const arch of archs) {
    await $`npx prebuildify --strip --napi --arch ${arch} ${nodeVersions.map(v => ['-t', `node@${v}`]).flat()} ${electronVersions.map(v => ['-t', `electron@${v}`]).flat()}`;
}

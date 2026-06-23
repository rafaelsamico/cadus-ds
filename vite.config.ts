import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  return {
    plugins: [
      react(),
      tailwindcss(),
      ...(isLib
        ? [dts({
            tsconfigPath: './tsconfig.app.json',
            entryRoot: path.resolve(__dirname, 'src'),
            include: ['src'],
            exclude: ['src/App.tsx', 'src/main.tsx'],
          })]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    ...(isLib && {
      build: {
        copyPublicDir: false,
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'CadusDS',
          formats: ['es'],
          fileName: 'index',
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
        cssCodeSplit: false,
      },
    }),
  }
})

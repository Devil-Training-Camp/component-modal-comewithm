#### husky

```javascript
1. pnpm install husky -D
2. pnpm run prepare
3. npx husky add .husky/pre-commit "pnpm run lint"
4. npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
5. pnpm install lint-staged -D
```

#### 待优化部分

内部状态受控 hook useControlValue
no command  destroyOnClose  createPortal
forceRender
class命名
afterClose
animation call 
useModal  api
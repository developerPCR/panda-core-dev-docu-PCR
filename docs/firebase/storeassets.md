---
sidebar_position: 8
---

# Store assets

<h2>Feel free to use our hook for this, all things you upload will be store on firebase storage (it is like S3).</h2>
You can see a good example of this on `components/organisms/account/Profile.tsx`.


How to use it:

```tsx
export default function MyComponent() {
  const [file, setFile] = useState('')
  const { uploadPublicFile } = useStorage()

  function handleFileChange(event: Event) {
    setFile(event.target.files[0])
  }

  async function uploadPublic() {
    await uploadPublicFile(file, (downloadUrl: string, path: string, time: string) => {
      console.log(downloadUrl)
    })
  }

  return (
    <input type="file" accept="image/*" onChange={handleFileChange} />
    {file && (
      <>
        <Button loading={loading} isSmall={true} onClick={uploadPublic}>
        Upload public
        </Button>
      </>
    )}
  )
}

```

:::danger
This links is public, so if you share it all users have access no matter if they are registered or not, use more security rules on `Firebase Storage` to restrict this inc ase you want.

:::

:::tip
This is useful in case you want to store users documents or whatever other assets.
Usually you get the downloadURL and save it in some Firebase Document, like `fe-user-assets` (as example).

This is being done by Firebase Storage.
:::

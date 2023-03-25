---
sidebar_position: 8
---

# Store assets

You can see a good example of this on `components/organisms/account/Profile.tsx`.

Feel free to use our hook for this, all things you upload will be store on firebase storage (it is like S3).

How to use it:

```tsx
export default function MyComponent() {
  const [file, setFile] = useState('')
  const { uploadPublicFile, uploadPrivateFile } = useStorage()

  function handleFileChange(event: Event) {
    setFile(event.target.files[0])
  }

  async function uploadPublic() {
    const link = await uploadPublicFile(file)
    console.log(link)
  }

  async function uploadPrivate() {
    const link = await uploadPrivateFile(file)
    console.log(link)
  }

  return (
    <input type="file" accept="image/*" onChange={handleFileChange} />
    {file && (
      <>
        <Button loading={loading} isSmall={true} onClick={uploadPublic}>
        Upload public
        </Button>
        <Button loading={loading} isSmall={true} onClick={uploadPrivate}>
        Upload private 
        </Button>
      </>
    )}
  )
}

```

import BrowserOnly from '@docusaurus/BrowserOnly';

// This wasn't technically part of CIROH Hub, so redirect silently.
export default function NgiabModuleRedirect() {
  return (
    <BrowserOnly>
      <span>
        <script>
          {setTimeout(() => location.href = "https://ngiab.ciroh.org/ngiab-101", 0)}
        </script>
      </span>
    </BrowserOnly>
  )
}
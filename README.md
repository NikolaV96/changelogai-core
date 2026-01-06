# @changelogai/core

Framework-agnostic SDK for fetching changelogs from ChangelogAI.

### Install the package
    
```bash
npm install @changelogai/core
```

### Add your API key
    
Create or update your `.env` file with your API key:
    
```bash title=".env"
CHANGELOG_AI_API_SECRET=clai_*******
```
    
You can generate an API key from the **Settings** page in your Changelog AI dashboard under the **API Keys** section.

### Fetch your changelogs
    
```typescript
import { fetchChangelogs } from "@changelogai/core";

const logs = await fetchChangelogs();
console.log(logs);
```

# DocuSign eSignature Quickstart

## Instructions

1. Navigate to `App and Keys` in the DocuSign developer portal and create a new app.
2. On the app creation page, create a new RSA Key and save the private key in a new file `private.key`
3. Whitelist `http://localhost:8000/` in Redirect URIs in the App creation page
4. Fill in the `.env` file with your app credentials
5. Install the dependencies by running `npm install` in the terminal
6. Create a new template in DocuSign. You can use the `Docusign Load Application.pdf` present in this directory.

When giving consent to your app you can use the URL below, fill in your client id before openin the URL

```
https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature%20impersonation&client_id=(YOUR CLIENT ID)&redirect_uri=http://localhost:8000/
```

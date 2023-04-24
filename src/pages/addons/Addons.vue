<template>
  <VContainer class="fill-height">
    <VCard class="fill-height pa-0 rounded-lg border" color="inner-card" elevation="8" width="100%">
      <VRow class="fill-height" no-gutters>
        <VCol class="border-r dark:border-slate-700" cols="3">
          <VCardText class="px-7 pt-7">
            <div class="mt-7 d-flex gap-1 cursor-pointer">
              <VIcon icon="$mdiFileDocumentOutline" />
              <div>All add-Ons</div>
            </div>
            <div class="mt-4 d-flex gap-2 cursor-pointer">
              <VIcon icon="$mdiMagnify" />
              <div>Enable Add-Ons</div>
            </div>
          </VCardText>
        </VCol>
        <VCol class="fill-height overflow-auto">
          <div class="d-flex fill-height flex-column">
            <div class="d-flex align-center gap-1 border-b pb-3">
              <VIcon class="mt-3 ml-5" icon="$mdiMagnify" size="18"></VIcon>
              <VTextField
                v-model="search"
                color="primary"
                density="compact"
                placeholder="Search Add-Ons"
                variant="plain"
              />
            </div>

            <div class="no-scrollbar flex flex-col overflow-auto">
              <div class="addon-card-wrapper p-4">
                <AddonCard
                  v-for="addon in addons"
                  :key="addon.title"
                  :body="addon.body"
                  :title="addon.title"
                />
              </div>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCard>
  </VContainer>
</template>
<script setup>
const search = useDebouncedRef()

const addons = [
  {
    title: 'PDF Break',
    body: 'This option makes it possible to break signed document in two individual PDF documents'
  },
  {
    title: 'Auto save changes',
    body: 'Allow your recipient to partially fill in fields on your documents, so they can return later and complete where they left off.'
  },

  {
    title: 'Simple Storage',
    body: 'Upload any document and have a smart, secure and award-winning archive for your business.'
  },

  {
    title: 'Document Workflow',
    body: 'Automatically send documents to recipients by linking multiple documents together.'
  },

  {
    title: 'Get Contacts from API',
    body: 'Import your existing customers to Simple Sign automatically through our API. Transfer all of your existing users into Simple Sign contacts. Works both for organizations and people.'
  },

  {
    title: 'Connect Your Dropbox',
    body: 'Import documents from your Dropbox directly into Simple Sign.'
  },

  {
    title: 'Content Library',
    body: 'Create reusable content blocks'
  },

  {
    title: 'Droplist settings +',
    body: 'Hide drop-down lists in your templates to create different scenarios within the same template'
  },

  {
    title: 'Product Table',
    body: 'Create custom product tables with calculations and more'
  },

  {
    title: 'Document Fields',
    body: 'Utilize these dynamic elements to auto-populate documents with metadata.'
  },

  {
    title: 'Contract Control',
    body: 'Get an overview of all your documents and set reminders based on their content.'
  },

  {
    title: 'Connect Your Google Drive',
    body: 'Import documents from your Google Drive directly into Simple Sign.'
  },

  {
    title: 'DSR Plug and Play',
    body: 'Simplify your GDPR with this smart DSR feature.'
  },

  {
    title: 'Document Key',
    body: 'Make your sensitive documents secure by adding a password to the document.'
  },

  {
    title: 'BulkSend',
    body: 'Send your documents to as many people as you want.'
  },

  {
    title: 'Schoolsoft Integration',
    body: 'Send your documents to as many people as you want.'
  },

  {
    title: 'CSV export in documents',
    body: 'Make life easy by exporting specific data to a CSV.'
  },

  {
    title: 'Branding',
    body: 'Brand your account with your company profile.'
  },

  {
    title: 'Point of Sale (POS)',
    body: 'Let your customers sign your documents right in your store by using a tablet.'
  },

  {
    title: 'FTP Upload',
    body: 'Brand your account with your company profile.'
  },

  {
    title: 'In-Meeting Signing',
    body: 'In a meeting? No worries, simply use this add-on to quickly sign in-person.'
  },

  {
    title: 'Get Link',
    body: 'Get the recipients URL when sending a document'
  },

  {
    title: 'Credit safe',
    body: 'Get an overview of all your documents and set reminders based on their content.'
  },

  {
    title: 'Revoke',
    body: `Gives you the option to revoke any document you've sent`
  },

  {
    title: 'API',
    body: `Simple sign API`
  },

  {
    title: 'Task Management',
    body: `Add a 'next task' to your documents. Get a better view if your documents has been managed or not`
  },

  {
    title: 'Automatical deletion of documents',
    body: `Small description goes here`
  },

  {
    title: 'Time wave',
    body: `When you send documents you can search and collect employee data from inactive employees.`
  },

  {
    title: 'ESP',
    body: `Select which ESP provider you want to use for your SimpleSign account`
  },

  {
    title: 'Swedish BankID',
    body: `Allow your documents to be signed using Swedish BankID.`
  },

  {
    title: 'Finish BankID',
    body: `Allow your documents to be signed using Finnish BankID (Finnish Trust Network, FTN)`
  },

  {
    title: 'Danish BankID',
    body: `Allow your documents to be signed using NemID`
  },

  {
    title: 'Norwegian BankID',
    body: `Allow your documents to be signed using Norwegian BankID.`
  },

  {
    title: 'Send PDF, Word, & Excel',
    body: `Upload and send PDF documents directly for signing.`
  },

  {
    title: 'Invitation Order',
    body: `Specify a custom signing order for your document.`
  },

  {
    title: 'Contacts',
    body: `Organize your recipients by people and organization. Send documents without entering repetitive information.`
  },

  {
    title: 'Video Attachment',
    body: `Send your documents with a personalized video. Make a professional impression like never before!`
  },

  {
    title: 'Attachment',
    body: `Add and request attachments.`
  },

  {
    title: 'Transfer Signature Role',
    body: `Allow a participant to forward their signing role to another signing party.`
  },

  {
    title: 'Attest Participant',
    body: `Allows you do add a viewer participant as an alternative to signing.`
  },

  {
    title: 'Expiration date',
    body: `Allows you to enter an expiration date to each document you send.`
  },

  {
    title: 'Editor',
    body: `Easily create and edit documents using the drag & drop editor.`
  },

  {
    title: 'SharePoint',
    body: `Synchronize your SharePoint folders and files with your Simple Sign archive`
  },

  {
    title: 'Groups & Permissions',
    body: `Get access to extended group & permission features.`
  },

  {
    title: 'Azure Active Directory',
    body: `Utilize Azure Active Directory to enable Enterprise Single Sign-On and Automatic Account Provisioning`
  },

  {
    title: 'Document Chat',
    body: `Chat directly with your recipients on the signing page.`
  },

  {
    title: 'Document plus',
    body: `Enable advanced options in documents history, including filters, custom columns and more`
  },

  {
    title: 'Verification Using BSI',
    body: `Seal your signed documents using BSI (Blockchain Signature Infrastructure)`
  },

  {
    title: 'SAML IDP Authentication',
    body: `Use the SAML 2.0 protocol with Simple Sign`
  },

  {
    title: 'Two-Factor Authentication',
    body: `Add an extra layer of security with two-factor authentication login`
  },

  {
    title: 'Lock option for template details',
    body: `Option to lock specific settings on your templates`
  },

  {
    title: 'Pipedrive',
    body: `Send and track documents directly from your PipeDrive account`
  },

  {
    title: 'HubSpot',
    body: `Send documents directly from your HubSpot account`
  },

  {
    title: 'Microsoft Dynamics Details',
    body: `Send documents for signing directly from Microsoft Dynamics.`
  },

  {
    title: 'Hide option for document fields',
    body: `Add hidden values shown only on your API response and not in your document pages.`
  },

  {
    title: 'Viewer Party',
    body: `Allows you to add a viewer participant with no signing option available.`
  },

  {
    title: 'Document type',
    body: `Create custom document types for your templates and documents`
  },
  {
    title: 'Document price',
    body: `This Add-on will allow user to calculate and track sum of Product Table in the Templates or set a custom amount`
  },

  {
    title: 'Custom SMS invitation',
    body: `Custom SMS invitation`
  },

  {
    title: 'Data Groups',
    body: `This Add-on will allow you to create groups of data that can be added into your templates`
  },

  {
    title: 'SMTP',
    body: `Configure your personal or company's email settings `
  },

  {
    title: 'Upload files after signing',
    body: `This Add-on will allow to upload files from signing area after the document is signed`
  },

  {
    title: 'Billecta Data',
    body: `With Billecta you can automatically collect Bank account information from your recipients`
  },

  {
    title: 'Template Redirect',
    body: `User will be able to have a redirect after a document has been signed. based on a template.`
  },

  {
    title: 'Signature popup message',
    body: `User can set custom message for every role`
  },

  {
    title: 'Select type of signature',
    body: `PAdES recognizes that digitally-signed documents`
  },

  {
    title: 'Widget with billecta',
    body: `Simplify your widget with billecta`
  },

  {
    title: 'Upsales',
    body: `Send documents directly from your account in Upsales`
  }
]
</script>

<style scoped>
.addon-card-wrapper {
  @apply grid gap-4 lg:grid-cols-2
}
</style>

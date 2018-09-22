# metatx-account-generator

### Purpose

Dapp developers can rely on this site to generate and store an ephemeral Ethereum account for a user in a cookie.

The reason for the third party account generation is it can then be used across multiple Dapps.


### Flow

An external Dapp user is redirected to this app.

We check if we have a cookie stored for our domain with a private key in it.

If not, we generate a private key and store it in a cookie for this domain.

Redirect back to the Dapp as smoothly as possible with their private key.

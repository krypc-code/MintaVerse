export const name_validation = {
  name: 'NFT name',
  label: 'NFT name',
  type: 'text',
  id: 'nftname',
  placeholder: 'Name your NFT...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const desc_validation = {
  name: 'NFT description',
  label: 'NFT description',
  multiline: true,
  id: 'nftdescription',
  placeholder: 'NFT description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}


export const password_validation = {
  name: 'custodialWalletAccessToken',
  label: 'custodialWalletAccessToken',
  type: 'password',
  id: 'password',
  placeholder: 'Private access token...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 64,
      message: 'min 64 characters',
    },
  },
}

export const num_validation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  placeholder: 'write a random number',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const supply_validation = {
  name: 'NFT Supply',
  label: 'Supply',
  type: 'number',
  id: 'nftsupply',
  default: 1,
  placeholder: 'Total Supply',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    min: {
      value:1,
      message: 'Must have one token.'
    },
    max: {
      value:20000,
      message:'Can not have more than 20000 tokens.'
    }
  },
}

export const email_validation = {
  name: 'email',
  label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'email address',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}

export const file_validation = {
  name: 'file',
  label: 'File Upload',
  type: 'file',
  id: 'upload',
  accept: 'image/*',
  placeholder: 'Drag and drop media..',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
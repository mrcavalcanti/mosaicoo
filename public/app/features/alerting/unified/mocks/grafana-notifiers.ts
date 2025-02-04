import { NotifierDTO } from 'app/types';

export const grafanaNotifiersMock: NotifierDTO[] = [
  {
    type: 'teams',
    name: 'Microsoft Teams',
    heading: 'Teams settings',
    description: 'Sends notifications using Incoming Webhook connector to Microsoft Teams',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'URL',
        description: '',
        placeholder: 'Teams incoming webhook url',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
    ],
  },
  {
    type: 'hipchat',
    name: 'HipChat',
    heading: 'HipChat settings',
    description: 'Sends notifications uto a HipChat Room',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Hip Chat Url',
        description: '',
        placeholder: 'HipChat URL (ex https://grafana.hipchat.com)',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'API Key',
        description: '',
        placeholder: 'HipChat API Key',
        propertyName: 'apiKey',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Room ID',
        description: '',
        placeholder: '',
        propertyName: 'roomid',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
    ],
  },
  {
    type: 'webhook',
    name: 'webhook',
    heading: 'Webhook settings',
    description: 'Sends HTTP POST request to a URL',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Url',
        description: '',
        placeholder: '',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'select',
        inputType: '',
        label: 'Http Method',
        description: '',
        placeholder: '',
        propertyName: 'httpMethod',
        selectOptions: [
          { value: 'POST', label: 'POST' },
          { value: 'PUT', label: 'PUT' },
        ],
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Username',
        description: '',
        placeholder: '',
        propertyName: 'username',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'input',
        inputType: 'password',
        label: 'Password',
        description: '',
        placeholder: '',
        propertyName: 'password',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: true,
        dependsOn: '',
      },
    ],
  },
  {
    type: 'prometheus-alertmanager',
    name: 'Prometheus Alertmanager',
    heading: 'Alertmanager settings',
    description: 'Sends alert to Prometheus Alertmanager',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Url',
        description:
          'As specified in Alertmanager documentation, do not specify a load balancer here. Enter all your Alertmanager URLs comma-separated.',
        placeholder: 'http://localhost:9093',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Basic Auth User',
        description: '',
        placeholder: '',
        propertyName: 'basicAuthUser',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'input',
        inputType: 'password',
        label: 'Basic Auth Password',
        description: '',
        placeholder: '',
        propertyName: 'basicAuthPassword',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: true,
        dependsOn: '',
      },
    ],
  },
  {
    type: 'email',
    name: 'Email',
    heading: 'Email settings',
    description: 'Sends notifications using Mosaicoo server configured SMTP settings',
    info: '',
    options: [
      {
        element: 'checkbox',
        inputType: '',
        label: 'Single email',
        description: 'Send a single email to all recipients',
        placeholder: '',
        propertyName: 'singleEmail',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'textarea',
        inputType: '',
        label: 'Addresses',
        description: 'You can enter multiple email addresses using a ";" separator',
        placeholder: '',
        propertyName: 'addresses',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
    ],
  },
  {
    type: 'slack',
    name: 'Slack',
    heading: 'Slack settings',
    description: 'Sends notifications to Slack',
    info: '',
    options: [
      {
        element: 'input',
        inputType: 'text',
        label: 'Recipient',
        description:
          'Specify channel or user, use #channel-name, @username (has to be all lowercase, no whitespace), or user/channel Slack ID - required unless you provide a webhook',
        placeholder: '',
        propertyName: 'recipient',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: false,
        dependsOn: 'secureSettings.url',
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Token',
        description: 'Provide a Slack API token (starts with "xoxb") - required unless you provide a webhook',
        placeholder: '',
        propertyName: 'token',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: true,
        dependsOn: 'secureSettings.url',
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Username',
        description: "Set the username for the bot's message",
        placeholder: '',
        propertyName: 'username',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Icon emoji',
        description: "Provide an emoji to use as the icon for the bot's message. Overrides the icon URL.",
        placeholder: '',
        propertyName: 'iconEmoji',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Icon URL',
        description: "Provide a URL to an image to use as the icon for the bot's message",
        placeholder: '',
        propertyName: 'iconUrl',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Mention Users',
        description:
          "Mention one or more users (comma separated) when notifying in a channel, by ID (you can copy this from the user's Slack profile)",
        placeholder: '',
        propertyName: 'mentionUsers',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Mention Groups',
        description:
          "Mention one or more groups (comma separated) when notifying in a channel (you can copy this from the group's Slack profile URL)",
        placeholder: '',
        propertyName: 'mentionGroups',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'select',
        inputType: '',
        label: 'Mention Channel',
        description: 'Mention whole channel or just active members when notifying',
        placeholder: '',
        propertyName: 'mentionChannel',
        selectOptions: [
          { value: '', label: 'Disabled' },
          { value: 'here', label: 'Every active channel member' },
          { value: 'channel', label: 'Every channel member' },
        ],
        showWhen: { field: '', is: '' },
        required: false,
        validationRule: '',
        secure: false,
        dependsOn: '',
      },
      {
        element: 'input',
        inputType: 'text',
        label: 'Webhook URL',
        description:
          "Optionally provide a Slack incoming webhook URL for sending messages, in this case the token isn't necessary",
        placeholder: 'Slack incoming webhook URL',
        propertyName: 'url',
        selectOptions: null,
        showWhen: { field: '', is: '' },
        required: true,
        validationRule: '',
        secure: true,
        dependsOn: 'token',
      },
    ],
  },
];

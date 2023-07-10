module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: "5rpM0ABdHt-IntztnKQFgIcPpWUld-CYAbBbw6eoXo4",
        sites: [
          {
            name: 'indigostudiostrapi',
            id: "1122a876-7ad5-4864-a68a-b80bf199dd1c",
            buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
            branch: 'master' // optional
          }
        ]
      },
    },
  });
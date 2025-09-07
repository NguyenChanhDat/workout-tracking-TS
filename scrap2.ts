const obj = {
  comment_count: 0,
  task_count: 0,
  type: 'pullrequest',
  id: 1,
  title: 'feat(bitbucket-CI): add scrap file for PR testing',
  description: '',
  rendered: {
    title: {
      type: 'rendered',
      raw: 'feat(bitbucket-CI): add scrap file for PR testing',
      markup: 'markdown',
      html: '<p>feat(bitbucket-CI): add scrap file for PR testing</p>',
    },
    description: { type: 'rendered', raw: '', markup: 'markdown', html: '' },
  },
  state: 'OPEN',
  draft: false,
  merge_commit: null,
  close_source_branch: false,
  closed_by: null,
  author: {
    display_name: 'Nguyễn Chánh Đạt',
    links: {
      self: {
        href: 'https://api.bitbucket.org/2.0/users/%7B4ce6c155-912e-4f93-9c3b-32f38116a88a%7D',
      },
      avatar: {
        href: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:24ac2c45-7817-4f14-9bf7-013655859523/018a7710-e14b-4205-b347-4af09299e387/128',
      },
      html: {
        href: 'https://bitbucket.org/%7B4ce6c155-912e-4f93-9c3b-32f38116a88a%7D/',
      },
    },
    type: 'user',
    uuid: '{4ce6c155-912e-4f93-9c3b-32f38116a88a}',
    account_id: '712020:24ac2c45-7817-4f14-9bf7-013655859523',
    nickname: 'Nguyễn Chánh Đạt',
  },
  reason: '',
  created_on: '2025-09-07T15:26:35.911038+00:00',
  updated_on: '2025-09-07T15:35:42.852493+00:00',
  destination: {
    branch: { name: 'dev' },
    commit: {
      hash: 'a00ef8b0993c',
      links: {
        self: {
          href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/commit/a00ef8b0993c',
        },
        html: {
          href: 'https://bitbucket.org/nguyen-chanh-dat/workout-tracking-be/commits/a00ef8b0993c',
        },
      },
      type: 'commit',
    },
    repository: {
      type: 'repository',
      full_name: 'nguyen-chanh-dat/workout-tracking-be',
      links: {
        self: {
          href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be',
        },
        html: {
          href: 'https://bitbucket.org/nguyen-chanh-dat/workout-tracking-be',
        },
        avatar: {
          href: 'https://bytebucket.org/ravatar/%7Bf8ca16d8-e036-42f3-a32a-2177df6286c9%7D?ts=default',
        },
      },
      name: 'workout-tracking-BE',
      uuid: '{f8ca16d8-e036-42f3-a32a-2177df6286c9}',
    },
  },
  source: {
    branch: {
      name: 'feat/bitbucket-CI',
      links: {},
      sync_strategies: ['merge_commit', 'rebase'],
    },
    commit: {
      hash: '503729d0ea9c',
      links: {
        self: {
          href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/commit/503729d0ea9c',
        },
        html: {
          href: 'https://bitbucket.org/nguyen-chanh-dat/workout-tracking-be/commits/503729d0ea9c',
        },
      },
      type: 'commit',
    },
    repository: {
      type: 'repository',
      full_name: 'nguyen-chanh-dat/workout-tracking-be',
      links: {
        self: {
          href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be',
        },
        html: {
          href: 'https://bitbucket.org/nguyen-chanh-dat/workout-tracking-be',
        },
        avatar: {
          href: 'https://bytebucket.org/ravatar/%7Bf8ca16d8-e036-42f3-a32a-2177df6286c9%7D?ts=default',
        },
      },
      name: 'workout-tracking-BE',
      uuid: '{f8ca16d8-e036-42f3-a32a-2177df6286c9}',
    },
  },
  reviewers: [],
  participants: [],
  links: {
    self: {
      href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/pullrequests/1',
    },
    html: {
      href: 'https://bitbucket.org/nguyen-chanh-dat/workout-tracking-be/pull-requests/1',
    },
    commits: {
      href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/pullrequests/1/commits',
    },
    approve: {
      href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/pullrequests/1/approve',
    },
    'request-changes': {
      href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/pullrequests/1/request-changes',
    },
    diff: {
      href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/diff/nguyen-chanh-dat/workout-tracking-be:503729d0ea9c%0Da00ef8b0993c?from_pullrequest_id=1&topic=true',
    },
    diffstat: {
      href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/diffstat/nguyen-chanh-dat/workout-tracking-be:503729d0ea9c%0Da00ef8b0993c?from_pullrequest_id=1&topic=true',
    },
    comments: {
      href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/pullrequests/1/comments',
    },
    activity: {
      href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/pullrequests/1/activity',
    },
    merge: {
      href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/pullrequests/1/merge',
    },
    decline: {
      href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/pullrequests/1/decline',
    },
    statuses: {
      href: 'https://api.bitbucket.org/2.0/repositories/nguyen-chanh-dat/workout-tracking-be/pullrequests/1/statuses',
    },
  },
  summary: { type: 'rendered', raw: '', markup: 'markdown', html: '' },
};

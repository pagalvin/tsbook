

interface httpResponse {
    config: any,
    headers: any,
    status: number,
    statusText: string;
}

interface userProfileRestModel {
    Attachments: boolean;
    AuthorId: number;
    BPBrands: string[];
    BPDescription: string;
    "odata.editLink": string;
    // and other user profile fields
}

interface userProfileResponse extends httpResponse {

    data: {
        value: userProfileRestModel[]
    }

}

let testUP: userProfileResponse;

testUP.data.value[0].BPDescription;



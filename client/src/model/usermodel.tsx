export default interface UserModel {
    username: string
    email: string
    announcement: {
        id: number
        title: string
        project_code: string
        educationlevel: string
        institution: string
        funded: boolean
        FundedAndNominated: boolean
        project_leader: string
        projectDeveloper2: string
        projectDeveloper3: string
        advisor: string
        img: {
            formats:{
                small: {
                    url: string
                }
            }
        }
    }
}
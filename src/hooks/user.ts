import { type UserInter,type users } from '@/types'
import   axios  from "axios";
import { onMounted, reactive, withDefaults } from 'vue'
export default function () {
    onMounted(() => {
        getuserslist()
    })

    let userslist = reactive<users>([])
    async function getuserslist() {
        try {
            let result = await axios.get('http://localhost:3000/users')
            userslist.push(...result.data)
    
        } catch (error) {
            alert('请求失败')
            console.log(error)
        }
    }
    return {userslist,getuserslist }
}
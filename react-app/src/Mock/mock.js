import Mock from 'mockjs'
var Random = Mock.Random;
let data = Mock.mock("http://www.123.com", {
    "list|1-10": [
        {
            'id|+1': 1,
            'name': "@name",
            'date':'@date',
            'image':Random.image('200x200','hah')
        }
    ]
})
export default data;
import request from '@/utils/request';

export const getList = ()=>{
    return request({
        url: '/products',
        method: 'get',
    })
}

export const getListById = (id) => {
    return request({
        url: `/products/id/${id}`,
        method: 'get'
    })
}

export const getByCode = (code) => {
    return request({
        url: `/products/code/${code}`,
        method: 'get'
    })
}

export const getListByName = (name) => {
    return request({
        url: `/products/name/${name}`,
        method: 'get'
    })
}

export const create = (product) => {
    const data = {
        code: product.code,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        date: product.date
    };
    return request({
        url: '/products',
        method: 'post',
        data: data
    })
}

export const change = (product)=>{
    const data = {
        code: product.code,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        date: product.date
    };
    return request({
        url: `/products/code/${data.code}`,
        method: 'patch',
        data: data
    })
}

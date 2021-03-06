import {request, METHOD} from '@/utils/request'
import { transformAbpListQuery,download } from '@/utils/abp'
import qs from 'querystring'
export function getAuditLogs(params) {
  return request('/api/audit-logging/audit-logs', METHOD.GET, transformAbpListQuery(params))
}

export function getAuditLog(id) {
  return request(`/api/audit-logging/audit-logs/${id}`, METHOD.GET)
}

export function deleteAuditLog(id) {
  return request(`/api/audit-logging/audit-logs/${id}`, METHOD.DELETE)
}

export function deleteManyAuditLog(ids) {
  let idsStr='';
    ids.map((item,index) => {
        if(index>0){
            idsStr+='&';
        }
        idsStr+=`ids=${item}`;
    });
  return request(`/api/audit-logging/audit-logs/delete-many?${idsStr}`, METHOD.DELETE)
}
export function exportExcel(params){
  let url = `${process.env.VUE_APP_API_BASE_URL}/api/audit-logging/audit-logs/export-excel?${qs.stringify(params)}`;
  download(url,'审计日志.xlsx');
}
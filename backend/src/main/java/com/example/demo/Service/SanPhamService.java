package com.example.demo.Service;

import com.example.demo.Model.SanPham;
import com.example.demo.Repository.SanPhamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SanPhamService {
    private int productNumber=0;
    @Autowired
    private SanPhamRepo repo;
    public List<Object[]> danhSachSpNoiBac(int limit) {
        List<Object[]> list = new ArrayList<>();
        for (int i = 0; i < limit; i++) {
            list.add(repo.danhSachSpNoiBac().get(i));
        }
        return list;
    }
    public List<Object[]> getALL(int currentPage, String name, int type, String price) {
        String []priceRange=price.split("-");
        int from=Integer.MIN_VALUE;
        int to=Integer.MAX_VALUE;
        if(!price.equals("Tất cả mệnh giá")){
            from= Integer.parseInt(priceRange[0]);
            to= Integer.parseInt(priceRange[1]);
        }

        if((name.equals("")) && (type==-1) && (price.equals("Tất cả mệnh giá"))) {
            return listForFilters(currentPage,repo.getALL());
        }
        else {
            if((!name.equals("")) && (type!=-1) && (!price.equals("Tất cả mệnh giá"))) {
                return listForFilters(currentPage,repo.filterByNameTypePrice(name,type,from,to));
            }
            else if((!name.equals("")) && (type!=-1)) {
                return listForFilters(currentPage,repo.filterByNameType(name,type));
            }
            else if((!name.equals(""))  && (!price.equals("Tất cả mệnh giá"))) {
                return listForFilters(currentPage,repo.filterByNamePrice(name,from,to));
            }
            else if((type!=-1) && (!price.equals("Tất cả mệnh giá"))) {
                return listForFilters(currentPage,repo.filterByTypePrice(type,from,to));
            }
            else if(!name.equals("") ) {
                return listForFilters(currentPage,repo.filterByName(name));
            }
            else if(type!=-1) {
                return listForFilters(currentPage,repo.filterByType(type));
            }
            else if(!price.equals("Tất cả mệnh giá")) {
                return listForFilters(currentPage,repo.filterByPrice(from,to));
            }
        }
        return new ArrayList<>();
    }
    public List<Object[]> listForFilters(int currentPage, List<Object[]> list){
        List<Object[]> templist=new ArrayList<>();
        int count=0;
        for (int i = (currentPage -1)*15; i < list.size(); i++) {
            if(count ==15){
                break;
            }
            templist.add(list.get(i));
            count++;
        }
        productNumber=list.size();
        return templist;
    }
    public int numOfProduct(){
        return productNumber;
    }
    public SanPham getById(Integer id) {
        return repo.findById(id).orElse(null);
    }
    public void update(SanPham sanPham) {
        repo.save(sanPham);
    }
}

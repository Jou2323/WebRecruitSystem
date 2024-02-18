package dev.mesh.recruitment;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String link;

    private String title;

    private String count_test;

    private Date date_create;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCount_test() {
        return count_test;
    }

    public void setCount_test(String count_test) {
        this.count_test = count_test;
    }

    public Date getDate_create() {
        return date_create;
    }

    public void setDate_create(Date date_create) {
        this.date_create = date_create;
    }
}

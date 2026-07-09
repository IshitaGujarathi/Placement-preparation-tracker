package com.careerforge.service;

import com.careerforge.entity.StudyLog;
import java.util.List;

public interface StudyLogService {
    StudyLog add(StudyLog log);
    List<StudyLog> getAll();
}